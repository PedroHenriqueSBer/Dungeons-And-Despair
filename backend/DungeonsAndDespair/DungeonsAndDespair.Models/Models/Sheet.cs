using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DungeonsAndDespair.Aplication.Models
{
    public class Sheet
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int lvl { get; set; }
        public int Platinum { get; set; }
        public int Gold { get; set; }
        public int Electrum { get; set; }
        public int Silver { get; set; }
        public int Copper { get; set; }
        public Race Race { get; set; }
        public Class Class { get; set; }

        public int Strength { get; set; }
        public int Dexterity { get; set; }
        public int Constitution { get; set; }
        public int Intelligence { get; set; }
        public int Wisdom { get; set; }
        public int Charisma { get; set; }
        
        public bool StrengthBonus { get; set; }
        public bool DexterityBonus { get; set; }
        public bool ConstitutionBonus { get; set; }
        public bool IntelligenceBonus { get; set; }
        public bool WisdomBonus { get; set; }
        public bool CharismaBonus { get; set; }
        
        public bool Athletics { get; set; }
        public bool AthleticsDouble { get; set; }
        public bool AthleticsHalf { get; set; }
        public bool AthleticsAdvantage { get; set; }
        
        public bool Acrobatics { get; set; }
        public bool AcrobaticsDouble { get; set; }
        public bool AcrobaticsHalf { get; set; }
        public bool AcrobaticsAdvantage { get; set; }
        
        public bool Stealth { get; set; }
        public bool StealthDouble { get; set; }
        public bool StealthHalf { get; set; }
        public bool StealthAdvantage { get; set; }
        
        public bool SleightOfHands { get; set; }
        public bool SleightOfHandsDouble { get; set; }
        public bool SleightOfHandsHalf { get; set; }
        public bool SleightOfHandsAdvantage { get; set; }
        
        public bool Arcana { get; set; }
        public bool ArcanaDouble { get; set; }
        public bool ArcanaHalf { get; set; }
        public bool ArcanaAdvantage { get; set; }
        
        public bool History { get; set; }
        public bool HistoryDouble { get; set; }
        public bool HistoryHalf { get; set; }
        public bool HistoryAdvantage { get; set; }
        
        public bool Investigation { get; set; }
        public bool InvestigationDouble { get; set; }
        public bool InvestigationHalf { get; set; }
        public bool InvestigationAdvantage { get; set; }
        
        public bool Nature { get; set; }
        public bool NatureDouble { get; set; }
        public bool NatureHalf { get; set; }
        public bool NatureAdvantage { get; set; }
        
        public bool Religion { get; set; }
        public bool ReligionDouble { get; set; }
        public bool ReligionHalf { get; set; }
        public bool ReligionAdvantage { get; set; }
        
        public bool Insight { get; set; }
        public bool InsightDouble { get; set; }
        public bool InsightHalf { get; set; }
        public bool InsightAdvantage { get; set; }
        
        public bool AnimalHandling { get; set; }
        public bool AnimalHandlingDouble { get; set; }
        public bool AnimalHandlingHalf { get; set; }
        public bool AnimalHandlingAdvantage { get; set; }
        
        public bool Medicine { get; set; }
        public bool MedicineDouble { get; set; }
        public bool MedicineHalf { get; set; }
        public bool MedicineAdvantage { get; set; }
        
        public bool Perception { get; set; }
        public bool PerceptionDouble { get; set; }
        public bool PerceptionHalf { get; set; }
        public bool PerceptionAdvantage { get; set; }
        
        public bool Survival { get; set; }
        public bool SurvivalDouble { get; set; }
        public bool SurvivalHalf { get; set; }
        public bool SurvivalAdvantage { get; set; }
        
        public bool Performace { get; set; }
        public bool PerformaceDouble { get; set; }
        public bool PerformaceHalf { get; set; }
        public bool PerformaceAdvantage { get; set; }
        
        public bool Deception { get; set; }
        public bool DeceptionDouble { get; set; }
        public bool DeceptionHalf { get; set; }
        public bool DeceptionAdvantage { get; set; }
        
        public bool Intimidation { get; set; }
        public bool IntimidationDouble { get; set; }
        public bool IntimidationHalf { get; set; }
        public bool IntimidationAdvantage { get; set; }
        
        public bool Persuasion { get; set; }
        public bool PersuasionDouble { get; set; }
        public bool PersuasionHalf { get; set; }
        public bool PersuasionAdvantage { get; set; }

    }
}
