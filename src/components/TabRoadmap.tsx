import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, CheckCircle2, Circle } from 'lucide-react';
import { cn } from '../lib/utils';

interface RoadmapItemProps {
    day: string;
    title: string;
    summary: string;
    detail: string[];
    deliverable: string;
    isOpen: boolean;
    onClick: () => void;
    isLast: boolean;
}

const RoadmapItem = ({ day, title, summary, detail, deliverable, isOpen, onClick, isLast }: RoadmapItemProps) => {
    return (
        <div className="flex gap-4">
            <div className="flex flex-col items-center">
                <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center z-10 transition-colors",
                    isOpen ? "bg-[#3C39C4] text-white" : "bg-white border-2 border-gray-200 text-gray-400"
                )}>
                    {isOpen ? <CheckCircle2 size={18} /> : <Circle size={18} />}
                </div>
                {!isLast && (
                    <div className={cn(
                        "w-0.5 flex-1 transition-colors",
                        isOpen ? "bg-[#3C39C4]/30" : "bg-gray-200"
                    )} />
                )}
            </div>

            <div className="flex-1 pb-8">
                <div
                    onClick={onClick}
                    className={cn(
                        "bg-white rounded-xl border p-6 cursor-pointer transition-all hover:shadow-md",
                        isOpen ? "border-[#3C39C4] shadow-md" : "border-gray-200 shadow-sm"
                    )}
                >
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <span className="text-sm font-bold text-[#3C39C4] uppercase tracking-wider">{day}</span>
                            <h3 className="text-lg font-bold text-gray-900 mt-1">{title}</h3>
                        </div>
                        {isOpen ? <ChevronUp className="text-[#3C39C4]" /> : <ChevronDown className="text-gray-400" />}
                    </div>

                    <p className="text-gray-600 font-medium">
                        {summary}
                    </p>

                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="pt-4 mt-4 border-t border-gray-100">
                                    <ul className="space-y-3 mb-4">
                                        {detail.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#3C39C4] flex-shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="bg-blue-50 text-blue-900 px-4 py-3 rounded-lg text-sm font-medium flex items-center gap-2">
                                        <span className="font-bold">Livrable :</span> {deliverable}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export const TabRoadmap = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const items = [
        {
            day: "J1",
            title: "IMMERSION & ALIGNEMENT",
            summary: "Comprendre l'existant et sécuriser les bases.",
            detail: [
                "Audit technique : Analyse de votre stack actuelle et des flux de données.",
                "Formation Direction : Principes avancés du Prompt Engineering et Sécurité des données.",
                "Identification des 'Quick Wins' : Les 3 actions immédiates pour soulager votre quotidien."
            ],
            deliverable: "Cartographie des risques et montée en compétence."
        },
        {
            day: "J2",
            title: "AUDIT & CHIFFRAGE (LE ROI)",
            summary: "Mesurer précisément le temps gagnable.",
            detail: [
                "Analyse Time-Motion : Chronométrage des tâches critiques (Inscriptions, Facturation, Suivi).",
                "Matrice de qualification : Identification des tâches éligibles à l'automatisation IA vs Délégation humaine.",
                "Modélisation : Calcul du coût du 'Statut Quo' vs 'Scénario Automatisé'."
            ],
            deliverable: "Rapport d'audit chiffré (Heures économisées/semaine)."
        },
        {
            day: "J3-4",
            title: "ARCHITECTURE & BUILD",
            summary: "Construire votre système opérationnel cible.",
            detail: [
                "Sélection Outils : Choix de la stack No-Code (Make/Zapier) et IA adaptée à votre budget.",
                "GED Intelligente : Restructuration du stockage documentaire pour accès instantané.",
                "Assistant IA : Configuration d'un GPT personnalisé pour le support élèves (Draft réponses)."
            ],
            deliverable: "Espace Notion 'Playbook' livré clé en main."
        },
        {
            day: "J5",
            title: "STRATÉGIE & DÉCISION",
            summary: "Trancher sur l'avenir du BTS.",
            detail: [
                "Projection Business Model 2025 : Impact de l'IA sur la marge.",
                "Analyse de Scénarios : Comparatif chiffré entre 'Maintien du BTS 2-5 ans' et 'Split en modules'.",
                "Roadmap Q1 : Planning de déploiement des automatisations."
            ],
            deliverable: "Note de recommandation stratégique."
        }
    ];

    return (
        <div className="p-8 max-w-3xl mx-auto">
            <div className="relative">
                {items.map((item, index) => (
                    <RoadmapItem
                        key={index}
                        {...item}
                        isOpen={openIndex === index}
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        isLast={index === items.length - 1}
                    />
                ))}
            </div>
        </div>
    );
};
