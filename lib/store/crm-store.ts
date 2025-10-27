import { create } from 'zustand';
import { Lead, Stage, Pipeline } from '@/types/crm';

interface CRMState {
  leads: Lead[];
  stages: Stage[];
  pipeline: Pipeline;
  setLeads: (leads: Lead[]) => void;
  setStages: (stages: Stage[]) => void;
  setPipeline: (pipeline: Pipeline) => void;
  moveLead: (leadId: string, newStageId: string) => void;
}

export const useCRMStore = create<CRMState>((set) => ({
  leads: [],
  stages: [],
  pipeline: {} as Pipeline,
  
  setLeads: (leads) => set({ leads }),
  setStages: (stages) => set({ stages }),
  setPipeline: (pipeline) => set({ pipeline }),
  
  moveLead: (leadId, newStageId) => set((state) => ({
    leads: state.leads.map((lead) =>
      lead.id === leadId ? { ...lead, stageId: newStageId } : lead
    ),
  })),
}));
