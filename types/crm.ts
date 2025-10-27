export type DISCProfile = 'D' | 'I' | 'S' | 'C' | null;

export interface Lead {
  id: string;
  name: string;
  phone?: string;
  email?: string;
  source?: string;
  ownerId: string;
  pipelineId: string;
  stageId: string;
  discProfile?: DISCProfile;
  dealValue?: number;
  tags?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Stage {
  id: string;
  pipelineId: string;
  name: string;
  order: number;
  color?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Pipeline {
  id: string;
  name: string;
  createdBy: string;
  stages: Stage[];
  createdAt: Date;
  updatedAt: Date;
}
