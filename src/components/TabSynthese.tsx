import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Database, GitPullRequest, AlertTriangle } from 'lucide-react';
import { cn } from '../lib/utils';

interface ContextCardProps {
    title: string;
    subtitle: string;
    icon: React.ElementType;
    colorClass: string;
    summary: string;
    detail: string;
}

const ContextCard = ({ title, subtitle, icon: Icon, colorClass, summary, detail }: ContextCardProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-pointer group"
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                    <div className={cn("p-3 rounded-xl bg-opacity-10", colorClass.replace('text-', 'bg-'))}>
                        <Icon size={24} className={colorClass.split(' ')[1]} />
                    </div>
                    <div className={cn("transition-transform duration-300", isOpen ? "rotate-180" : "group-hover:translate-y-1")}>
                        <ChevronDown size={20} className="text-gray-400" />
                    </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
                <p className="text-sm font-medium text-gray-500 mb-3 uppercase tracking-wide">{subtitle}</p>

                <p className="text-gray-600 leading-relaxed">
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
                            <div className="pt-4 mt-4 border-t border-gray-100 text-sm text-gray-600 leading-relaxed bg-gray-50/50 -mx-6 -mb-6 p-6">
                                {detail}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export const TabSynthese = () => {
    const contextCards = [
        {
            title: "Surcharge Opérationnelle",
            subtitle: "Le Goulot d'Étranglement",
            icon: AlertTriangle,
            colorClass: "bg-orange-50 text-orange-600",
            summary: "Les processus manuels saturent votre équipe (2 collab. + 12 freelances).",
            detail: "Les processus actuels (inscriptions, facturation, suivi élèves) sont traités manuellement. Cette dette organisationnelle consomme une énergie disproportionnée, rendant toute croissance supplémentaire risquée pour la stabilité de l'équipe."
        },
        {
            title: "Déficit d'Outillage",
            subtitle: "Gestion de la Connaissance",
            icon: Database,
            colorClass: "bg-blue-50 text-blue-600",
            summary: "Absence de GED et d'automatisation créant une forte dépendance aux individus.",
            detail: "L'absence de GED (Gestion Électronique des Documents) structurée et d'automatisation sur les tâches répétitives (support niveau 1, production de contenus) crée une dépendance forte aux individus et ralentit l'exécution."
        },
        {
            title: "Incertitude Décisionnelle",
            subtitle: "Pivot Stratégique",
            icon: GitPullRequest,
            colorClass: "bg-purple-50 text-purple-600",
            summary: "La décision 'BTS vs Modules courts' nécessite une validation par la donnée.",
            detail: "La décision de pivoter ou non votre offre (BTS vs Modules courts) ne peut se prendre à l'intuition. Elle nécessite de valider une hypothèse clé : L'IA peut-elle réduire suffisamment les coûts de gestion pour rendre le modèle BTS pérenne ?"
        }
    ];

    return (
        <div className="p-8 max-w-6xl mx-auto space-y-12">
            {/* Executive Summary Section */}
            <section className="bg-white rounded-2xl p-10 shadow-sm border border-gray-200">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Executive Summary</h2>
                    </div>

                    <div className="prose prose-lg text-gray-600 mx-auto space-y-8">
                        {/* Situation */}
                        <p className="leading-relaxed">
                            <span className="font-bold text-[#3C39C4] uppercase text-sm tracking-wide block mb-2">Situation</span>
                            FORMEA Santé s'est imposée comme une référence de la formation à distance en diététique avec <span className="font-semibold text-gray-900">250 élèves</span> et une pédagogie 100% spécialisée. Cette réussite repose sur une promesse forte : un accompagnement ultra-personnalisé sur des cycles longs de <span className="font-semibold text-gray-900">2 à 5 ans</span>, soutenu par des outils modernes.
                        </p>

                        {/* Complication */}
                        <p className="leading-relaxed">
                            <span className="font-bold text-[#3C39C4] uppercase text-sm tracking-wide block mb-2">Complication</span>
                            Ce modèle sur-mesure se heurte aujourd'hui à un mur opérationnel : la gestion administrative complexe (suivi des stages, dossiers de financement, parcours modulables) sature l'équipe dirigeante. Cet épuisement bloque la prise de décision stratégique pour la <span className="font-semibold text-gray-900">rentrée de février</span> et freine le lancement de votre <span className="font-semibold text-gray-900">seconde activité</span>.
                        </p>

                        {/* Resolution */}
                        <p className="leading-relaxed">
                            <span className="font-bold text-[#3C39C4] uppercase text-sm tracking-wide block mb-2">Résolution</span>
                            Notre intervention d'Audit et Formation structurera vos processus pour automatiser le suivi administratif et redonner de l'autonomie à vos équipes. Cette transformation vise à sécuriser la pérennité du BTS actuel tout en libérant la bande passante nécessaire pour diversifier sereinement votre offre.
                        </p>
                    </div>
                </div>
            </section>

            {/* Context Cards Section */}
            <section>
                <div className="flex items-center gap-4 mb-8">
                    <div className="h-px bg-gray-200 flex-1"></div>
                    <h3 className="text-lg font-bold text-gray-400 uppercase tracking-widest">Compréhension des Enjeux</h3>
                    <div className="h-px bg-gray-200 flex-1"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {contextCards.map((card, index) => (
                        <ContextCard key={index} {...card} />
                    ))}
                </div>
            </section>
        </div>
    );
};
