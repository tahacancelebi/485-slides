'use client';

import {
  BaseEdge,
  EdgeLabelRenderer,
  getBezierPath,
  Handle,
  MarkerType,
  Position,
  ReactFlow,
  type Edge,
  type EdgeProps,
  type Node,
  type NodeProps,
  type ReactFlowInstance,
} from '@xyflow/react';

/*
 * Data transcribed 1:1 from dependency-graph-flowchart.md (knime-workbench).
 * All 16 packages + 20 edges are represented in a 4-layer hierarchy that
 * matches the user's subgraph definition:
 *
 *   Katman 1 — Giriş & Testler   : N1, N2, N3, N9, N14  (+ isolated N4-N8)
 *   Katman 2 — Editör & Görünümler: N10, N11
 *   Katman 3 — Arayüz & Düzen    : N12, N13
 *   Katman 4 — Repository & Çekirdek: N15, N16
 *
 * Edge labels use a custom `DepEdge` component so they render in the
 * `EdgeLabelRenderer` overlay — this keeps the weight numbers ABOVE nodes,
 * even when an edge crosses multiple layers.
 */

type Role = 'hub' | 'mid' | 'base' | 'leaf' | 'test' | 'iso';

type DepNodeData = {
  label: string;
  sub: string;
  role: Role;
};

type LabelKind = 'section' | 'layer';

type LabelNodeData = {
  text: string;
  kind: LabelKind;
  accent?: string;
};

type DepNode = Node<DepNodeData, 'dep'>;
type LabelNode = Node<LabelNodeData, 'label'>;
type FlowNode = DepNode | LabelNode;

/* ---------- hierarchy geometry ----------
 * Positions are defined in a flat 940 × 640 canvas; React Flow fitView scales
 * the whole diagram into the slide card. Layers are stacked top-to-bottom so
 * cross-layer arrows always point downward — the single red edge (N11 → N12)
 * is the only one that visually climbs, reinforcing the "cycle" reading.
 */

const LAYER_Y = {
  L1: 60,
  L2: 230,
  L3: 380,
  L4: 540,
};

const nodes: FlowNode[] = [
  /* ============ LAYER BANNERS ============ */
  {
    id: 'banner-l1',
    type: 'label',
    position: { x: -20, y: LAYER_Y.L1 - 38 },
    data: { text: '01 · INPUT & TESTS', kind: 'layer', accent: '#B85C38' },
  },
  {
    id: 'banner-l2',
    type: 'label',
    position: { x: -20, y: LAYER_Y.L2 - 38 },
    data: { text: '02 · EDITOR & VIEWS', kind: 'layer', accent: '#E8B83D' },
  },
  {
    id: 'banner-l3',
    type: 'label',
    position: { x: -20, y: LAYER_Y.L3 - 38 },
    data: { text: '03 · UI & LAYOUT', kind: 'layer', accent: '#1A1A2E' },
  },
  {
    id: 'banner-l4',
    type: 'label',
    position: { x: -20, y: LAYER_Y.L4 - 38 },
    data: { text: '04 · REPOSITORY & CORE', kind: 'layer', accent: '#3D5240' },
  },

  /* ============ LAYER 1 — Giriş & Testler ============ */
  {
    id: 'N3',
    type: 'dep',
    position: { x: 30, y: LAYER_Y.L1 },
    data: { label: 'workflowcoach', sub: 'workbench.workflowcoach', role: 'leaf' },
  },
  {
    id: 'N1',
    type: 'dep',
    position: { x: 185, y: LAYER_Y.L1 },
    data: { label: 'svgexport', sub: 'editor.svgexport', role: 'leaf' },
  },
  {
    id: 'N2',
    type: 'dep',
    position: { x: 335, y: LAYER_Y.L1 },
    data: { label: 'editor.tests', sub: 'editor.tests', role: 'test' },
  },
  {
    id: 'N9',
    type: 'dep',
    position: { x: 490, y: LAYER_Y.L1 },
    data: { label: 'explorer.view.tests', sub: 'explorer.view.tests', role: 'test' },
  },
  {
    id: 'N14',
    type: 'dep',
    position: { x: 660, y: LAYER_Y.L1 },
    data: { label: 'repository.tests', sub: 'repository.tests', role: 'test' },
  },

  /* ============ LAYER 2 — Editör & Görünümler ============ */
  {
    id: 'N10',
    type: 'dep',
    position: { x: 260, y: LAYER_Y.L2 },
    data: { label: 'explorer.view', sub: 'workbench.explorer.view', role: 'hub' },
  },
  {
    id: 'N11',
    type: 'dep',
    position: { x: 495, y: LAYER_Y.L2 },
    data: { label: 'editor', sub: 'workbench.editor', role: 'hub' },
  },

  /* ============ LAYER 3 — Arayüz & Düzen ============ */
  {
    id: 'N13',
    type: 'dep',
    position: { x: 170, y: LAYER_Y.L3 },
    data: { label: 'ui', sub: 'workbench.ui', role: 'mid' },
  },
  {
    id: 'N12',
    type: 'dep',
    position: { x: 605, y: LAYER_Y.L3 },
    data: { label: 'ui.layout', sub: 'workbench.ui.layout', role: 'mid' },
  },

  /* ============ LAYER 4 — Repository & Çekirdek ============ */
  {
    id: 'N15',
    type: 'dep',
    position: { x: 230, y: LAYER_Y.L4 },
    data: { label: 'repository', sub: 'workbench.repository', role: 'mid' },
  },
  {
    id: 'N16',
    type: 'dep',
    position: { x: 565, y: LAYER_Y.L4 + 10},
    data: { label: 'core', sub: 'workbench.core', role: 'base' },
  },

  /* ============ ISOLATED COLUMN (Katman 1 · Yalıtılmış) ============ */
  {
    id: 'iso-label',
    type: 'label',
    position: { x: 830, y: LAYER_Y.L1 - 38 },
    data: { text: 'ISOLATED · NO COUPLING', kind: 'section' },
  },
  {
    id: 'N4',
    type: 'dep',
    position: { x: 830, y: LAYER_Y.L1 },
    data: { label: 'features.explorer.view', sub: 'features.explorer.view', role: 'iso' },
  },
  {
    id: 'N8',
    type: 'dep',
    position: { x: 830, y: LAYER_Y.L1 + 80 },
    data: { label: 'features.workbench', sub: 'features.workbench', role: 'iso' },
  },
  {
    id: 'N7',
    type: 'dep',
    position: { x: 830, y: LAYER_Y.L1 + 160 },
    data: { label: 'ui.browser', sub: 'workbench.ui.browser', role: 'iso' },
  },
  {
    id: 'N6',
    type: 'dep',
    position: { x: 830, y: LAYER_Y.L1 + 240 },
    data: { label: 'update.workbench', sub: 'update.workbench', role: 'iso' },
  },
  {
    id: 'N5',
    type: 'dep',
    position: { x: 830, y: LAYER_Y.L1 + 320 },
    data: { label: 'pom.xml', sub: '— build descriptor', role: 'iso' },
  },
];

type WeightBand = 'light' | 'medium' | 'heavy';

const bandFor = (weight: number): WeightBand => {
  if (weight >= 100) return 'heavy';
  if (weight >= 30) return 'medium';
  return 'light';
};

type DepEdgeData = {
  variant: WeightBand | 'cycle';
  label: string;
};

/* All 20 edges from the mermaid source, verbatim.
 * `cycle: true` flags edges that participate in a cyclic dependency and get
 * the bright crimson "bad" styling in the UI. */
const rawEdges: Array<{
  id: string;
  src: string;
  dst: string;
  w: number;
  label?: string;
  cycle?: boolean;
}> = [
  { id: 'e1-16', src: 'N1', dst: 'N16', w: 7 },
  { id: 'e1-11', src: 'N1', dst: 'N11', w: 27 },

  { id: 'e2-11', src: 'N2', dst: 'N11', w: 8 },

  { id: 'e3-11', src: 'N3', dst: 'N11', w: 6 },
  { id: 'e3-15', src: 'N3', dst: 'N15', w: 16 },
  { id: 'e3-16', src: 'N3', dst: 'N16', w: 24 },

  { id: 'e9-10', src: 'N9', dst: 'N10', w: 56 },

  { id: 'e10-16', src: 'N10', dst: 'N16', w: 173 },
  { id: 'e10-13', src: 'N10', dst: 'N13', w: 106 },
  { id: 'e10-15', src: 'N10', dst: 'N15', w: 12 },

  { id: 'e11-10', src: 'N11', dst: 'N10', w: 358 },
  { id: 'e11-13', src: 'N11', dst: 'N13', w: 286 },
  { id: 'e11-15', src: 'N11', dst: 'N15', w: 362 },
  { id: 'e11-16', src: 'N11', dst: 'N16', w: 353 },
  // ⚠ CYCLIC DEPENDENCY — editor ↔ ui.layout (12 forward / 105 back)
  // Matches `linkStyle 14 stroke:red` in the source mermaid.
  { id: 'e11-12', src: 'N11', dst: 'N12', w: 105, label: '⚠ 12 / 105', cycle: true },

  { id: 'e12-16', src: 'N12', dst: 'N16', w: 9 },

  { id: 'e13-15', src: 'N13', dst: 'N15', w: 97 },
  { id: 'e13-16', src: 'N13', dst: 'N16', w: 90 },

  { id: 'e14-15', src: 'N14', dst: 'N15', w: 135 },

  { id: 'e15-16', src: 'N15', dst: 'N16', w: 37 },
];

type DepEdgeType = Edge<DepEdgeData, 'dep'>;

const edges: DepEdgeType[] = rawEdges.map(({ id, src, dst, w, label, cycle }) => {
  const band = bandFor(w);
  const variant: DepEdgeData['variant'] = cycle ? 'cycle' : band;
  const classes = [`weight-${band}`];
  if (cycle) classes.push('is-cycle');

  const edge: DepEdgeType = {
    id,
    source: src,
    target: dst,
    type: 'dep',
    animated: band === 'heavy' || cycle === true,
    className: classes.join(' '),
    zIndex: cycle ? 1000 : 0,
    data: {
      variant,
      label: label ?? String(w),
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: cycle ? 18 : 14,
      height: cycle ? 18 : 14,
      color: cycle ? '#D13B3B' : undefined,
    },
  };

  // Make cyclic edges visually bidirectional — arrowhead on both ends
  if (cycle) {
    edge.markerStart = {
      type: MarkerType.ArrowClosed,
      width: 18,
      height: 18,
      color: '#D13B3B',
    };
  }

  return edge;
});

/* ---------- custom edge with DOM label overlay ---------- */

function DepEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  markerEnd,
  markerStart,
  data,
}: EdgeProps<DepEdgeType>) {
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const variant = data?.variant ?? 'light';
  const labelClass = `dep-edge-label dep-edge-label-${variant}`;

  return (
    <>
      <BaseEdge id={id} path={edgePath} markerEnd={markerEnd} markerStart={markerStart} />
      <EdgeLabelRenderer>
        <div
          className={`nodrag nopan ${labelClass}`}
          style={{
            position: 'absolute',
            transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
            pointerEvents: 'none',
          }}
        >
          {data?.label}
        </div>
      </EdgeLabelRenderer>
    </>
  );
}

const edgeTypes = {
  dep: DepEdge,
};

/* ---------- node renderers ---------- */

const roleStyles: Record<Role, {
  bg: string;
  border: string;
  text: string;
  tag: string;
  tagColor: string;
  minWidth: number;
}> = {
  hub: {
    bg: '#F4EFE2',
    border: '#2A1A1A',
    text: '#2A1A1A',
    tag: 'HUB',
    tagColor: '#B85C38',
    minWidth: 118,
  },
  base: {
    bg: '#3D5240',
    border: '#B8D44E',
    text: '#F4EFE2',
    tag: 'BASE',
    tagColor: '#B8D44E',
    minWidth: 118,
  },
  mid: {
    bg: '#1A1A2E',
    border: '#E8B83D',
    text: '#F4EFE2',
    tag: 'MID',
    tagColor: '#E8B83D',
    minWidth: 112,
  },
  leaf: {
    bg: '#F4EFE2',
    border: '#B85C38',
    text: '#2A1A1A',
    tag: 'LEAF',
    tagColor: '#B85C38',
    minWidth: 108,
  },
  test: {
    bg: '#E8B83D',
    border: '#2A1A1A',
    text: '#2A1A1A',
    tag: 'TEST',
    tagColor: '#2A1A1A',
    minWidth: 108,
  },
  iso: {
    bg: '#F4EFE2',
    border: '#2A1A1A',
    text: '#2A1A1A',
    tag: 'ISO',
    tagColor: '#2A1A1A',
    minWidth: 130,
  },
};

function DepNodeView({ data }: NodeProps<DepNode>) {
  const s = roleStyles[data.role];
  const isIso = data.role === 'iso';
  return (
    <div
      className="relative rounded-[6px] px-[10px] py-[7px] shadow-[0_3px_10px_rgba(0,0,0,0.25)]"
      style={{
        background: s.bg,
        border: `1.5px ${isIso ? 'dashed' : 'solid'} ${s.border}`,
        color: s.text,
        minWidth: s.minWidth,
        opacity: isIso ? 0.82 : 1,
      }}
    >
      <Handle type="target" position={Position.Top} />
      <span
        className="block text-[7px] font-black tracking-[0.18em] leading-none mb-[3px]"
        style={{ color: s.tagColor }}
      >
        {s.tag}
      </span>
      <span className="block text-[11.5px] font-black leading-[1.05] tracking-tight">
        {data.label}
      </span>
      <span
        className="block text-[7.5px] font-medium mt-[2px] leading-tight"
        style={{ color: s.text, opacity: 0.65 }}
      >
        {data.sub}
      </span>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

function LabelNodeView({ data }: NodeProps<LabelNode>) {
  if (data.kind === 'layer') {
    return (
      <div className="pointer-events-none select-none flex items-center gap-[8px]">
        <span
          className="inline-block w-[22px] h-[3px]"
          style={{ background: data.accent ?? '#2A1A1A' }}
        />
        <span
          className="text-[9px] font-black tracking-[0.22em] uppercase"
          style={{ color: data.accent ?? '#2A1A1A' }}
        >
          {data.text}
        </span>
      </div>
    );
  }
  return (
    <div className="pointer-events-none select-none flex items-center gap-[6px]">
      <span className="inline-block w-[14px] h-[2px] bg-[#2A1A1A]/60" />
      <span className="text-[8.5px] font-black tracking-[0.22em] text-[#2A1A1A]/75">
        {data.text}
      </span>
    </div>
  );
}

const nodeTypes = {
  dep: DepNodeView,
  label: LabelNodeView,
};

/* ---------- exported container ---------- */

export default function DependencyFlowGraph() {
  const handleInit = (instance: ReactFlowInstance<FlowNode, DepEdgeType>) => {
    // Ensure every node is in view — fitView on mount can race the container
    // size, so we re-fit once the instance is ready and once more after a tick
    // to catch the first full layout.
    instance.fitView({ padding: 0.14, duration: 0 });
    requestAnimationFrame(() => instance.fitView({ padding: 0.14, duration: 0 }));
  };

  return (
    <div className="dep-flow w-full h-full relative">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        onInit={handleInit}
        fitView
        fitViewOptions={{ padding: 0.14 }}
        minZoom={0.25}
        maxZoom={2.5}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        panOnDrag={true}
        panOnScroll={true}
        zoomOnScroll={true}
        zoomOnPinch={true}
        zoomOnDoubleClick={false}
        preventScrolling={false}
        proOptions={{ hideAttribution: true }}
      />
    </div>
  );
}
