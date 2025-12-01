import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, AlertCircle, Zap, Target } from 'lucide-react';
import { cn } from '../lib/utils';

interface CardProps {
    title: string;
    icon: React.ElementType;
    summary: string;
    detail: string;
    colorClass: string;
}

const Card = ({ title, icon: Icon, summary, detail, colorClass }: CardProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                    <div className={cn("p-2 rounded-lg", colorClass)}>
                        <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                    {summary}
                </p>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                        >
                            <div className="pt-2 pb-4 text-sm text-gray-500 border-t border-gray-100 mt-2">
                                {detail}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-1 text-sm font-medium text-[#3C39C4] hover:text-blue-800 transition-colors mt-2"
                >
                    {isOpen ? (
                        <>
                            Masquer le détail <ChevronUp size={16} />
                        </>
                    ) : (
                        <>
                            Lire le détail <ChevronDown size={16} />
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};

export const TabSynthese = () => {
    const cards = [
        {
            title: "CONSTAT",
            icon: AlertCircle,
            colorClass: "bg-red-500",
            summary: "Votre BTS grandit, mais vos processus actuels ne sont plus adaptés. Le risque de surcharge administrative est réel.",
            detail: "Détail : Analyse du ratio 'Temps Admin / Temps Pédagogique'. Identification des goulots d'étranglement liés aux 250 élèves."
        },
        {
            title: "LEVIER IA",
            icon: Zap,
            colorClass: "bg-amber-500",
            summary: "L'automatisation et l'IA peuvent absorber 40% de la charge répétitive pour libérer du temps humain.",
            detail: "Détail : Focus sur 3 axes : 1. Gestion documentaire (GED) 2. Réponses emails/support 3. Production de contenus vidéos."
        },
        {
            title: "OBJECTIF",
            icon: Target,
            colorClass: "bg-emerald-500",
            summary: "Structurer une machine opérationnelle scalable pour accueillir sereinement la prochaine promotion.",
            detail: "Détail : Fournir les KPIs financiers et opérationnels pour valider le pivot stratégique de fin décembre."
        }
    ];

    return (
        <div className="p-8">
            <div className="grid md:grid-cols-3 gap-6">
                {cards.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </div>
        </div>
    );
};
