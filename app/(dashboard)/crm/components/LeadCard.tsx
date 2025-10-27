import { Lead } from '@/types/crm';
import DISCBadge from './DISCBadge';

interface Props {
  lead: Lead;
}

export default function LeadCard({ lead }: Props) {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-yellow-600 transition-all cursor-pointer">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-white truncate">{lead.name}</h3>
          {lead.dealValue && (
            <p className="text-yellow-600 text-xs font-medium">
              R$ {lead.dealValue.toLocaleString('pt-BR')}
            </p>
          )}
        </div>
        <DISCBadge profile={lead.discProfile} />
      </div>
      
      {lead.phone && (
        <p className="text-xs text-gray-400 mb-1">📱 {lead.phone}</p>
      )}
      
      {lead.tags && lead.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-2">
          {lead.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="px-2 py-0.5 bg-gray-700 text-gray-300 rounded text-xs">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
