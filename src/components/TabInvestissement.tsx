
import { Check } from 'lucide-react';

export const TabInvestissement = () => {
    return (
        <div className="p-8 flex justify-center">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 max-w-lg w-full overflow-hidden">
                <div className="bg-[#3C39C4] p-8 text-center text-white">
                    <h3 className="text-xl font-medium opacity-90 mb-2">Investissement Forfaitaire</h3>
                    <div className="flex items-baseline justify-center gap-1">
                        <span className="text-5xl font-bold">4 500</span>
                        <span className="text-2xl">€ HT</span>
                    </div>
                    <p className="mt-4 text-blue-100 text-sm">Mission de 5 jours • Clé en main</p>
                </div>

                <div className="p-8">
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-start gap-3">
                            <div className="p-1 bg-green-100 rounded-full mt-0.5">
                                <Check size={16} className="text-green-600" />
                            </div>
                            <span className="text-gray-700">Audit complet & Cartographie des flux</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="p-1 bg-green-100 rounded-full mt-0.5">
                                <Check size={16} className="text-green-600" />
                            </div>
                            <span className="text-gray-700">Mise en place Stack Technique (Make/Notion)</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="p-1 bg-green-100 rounded-full mt-0.5">
                                <Check size={16} className="text-green-600" />
                            </div>
                            <span className="text-gray-700">Configuration Assistant IA (Support Élèves)</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="p-1 bg-green-100 rounded-full mt-0.5">
                                <Check size={16} className="text-green-600" />
                            </div>
                            <span className="text-gray-700">Formation & Transfert de compétences</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="p-1 bg-green-100 rounded-full mt-0.5">
                                <Check size={16} className="text-green-600" />
                            </div>
                            <span className="text-gray-700">Livrables stratégiques & Roadmap 2025</span>
                        </li>
                    </ul>

                    <button className="w-full bg-[#3C39C4] hover:bg-blue-800 text-white font-bold py-4 rounded-xl transition-colors shadow-md hover:shadow-lg">
                        Valider la mission
                    </button>

                    <p className="text-xs text-gray-500 text-center mt-6">
                        Inclus : Accès à la base de connaissance Notion à vie + Support email 1 mois post-mission.
                    </p>
                </div>
            </div>
        </div>
    );
};
