export interface DragNDropProps {
  filesDropped: (action: boolean) => void;
}

export interface DragNDropState {
  filesDropped: boolean;
}

export const initialDragNDropState: DragNDropState = {
  filesDropped: false,
};
