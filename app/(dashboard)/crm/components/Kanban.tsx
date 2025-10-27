'use client';

import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';
import { useCRMStore } from '@/lib/store/crm-store';
import { mockLeads, mockStages, mockPipeline } from '@/lib/mock-data';
import LeadCard from './LeadCard';
import { useEffect } from 'react';

export default function Kanban() {
  const { stages, leads, moveLead, setLeads, setStages, setPipeline } = useCRMStore();

  useEffect(() => {
    setLeads(mockLeads);
    setStages(mockStages);
    setPipeline(mockPipeline);
  }, [setLeads, setStages, setPipeline]);

  const getLeadsByStage = (stageId: string) => {
    return leads.filter(lead => lead.stageId === stageId);
  };

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    
    const leadId = result.draggableId.replace('lead-', '');
    const newStageId = result.destination.droppableId.replace('stage-', '');
    
    moveLead(leadId, newStageId);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="px-6 py-4 border-b border-gray-700">
        <h1 className="text-2xl font-bold text-white">Pipeline</h1>
      </div>

      <div className="flex-1 overflow-x-auto overflow-y-hidden">
        <DragDropContext onDragEnd={handleDragEnd}>
          <div className="inline-flex h-full gap-4 px-6 py-4">
            {stages.map((stage) => {
              const stageLeads = getLeadsByStage(stage.id);
              
              return (
                <div key={stage.id} className="w-80 flex-shrink-0">
                  <div className="mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: stage.color }} />
                      <h3 className="font-semibold text-sm text-white">{stage.name}</h3>
                      <span className="text-xs text-gray-400 bg-gray-800 px-2 py-0.5 rounded-full">
                        {stageLeads.length}
                      </span>
                    </div>
                  </div>

                  <Droppable droppableId={`stage-${stage.id}`}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className={`space-y-3 p-3 rounded-lg min-h-[200px] ${
                          snapshot.isDraggingOver ? 'bg-gray-800' : 'bg-gray-900'
                        }`}
                      >
                        {stageLeads.map((lead, index) => (
                          <Draggable key={lead.id} draggableId={`lead-${lead.id}`} index={index}>
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <LeadCard lead={lead} />
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </div>
              );
            })}
          </div>
        </DragDropContext>
      </div>
    </div>
  );
}
