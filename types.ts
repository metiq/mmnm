export interface IBuilding {
  photos: string[];
  values: {
    name: string[];
    dateBuilt: string;
  };
  bibliography: string;
  dateInspection: string;
  currentData: {
    materiality: {
      exterior: {
        roof: string;
        carpentry: string;
        facade: string;
        parterre: string;
      };
      interior: {
        sharedContent: string;
        privateContent: string;
      };
    };
    physicalCondition: {
      exterior: {
        condition: string;
        notes: string;
      };
      interior: {
        condition: string;
        notes: string;
      };
    };
    modifications: string;
    authenticity: {
      exterior: {
        condition: string;
        notes: string;
      };
      interior: {
        notes: string;
        condition: string;
      };
    };
  };
  risks: string;
  number: string;
  inspectionBy: string;
  code: string;
  suggestions: string;
  photo: string;
  basicData: {
    hasProtectedStatus: boolean;
    buildingName: string;
    originalPurpose: {
      type: string;
      notes: string;
    };
    dateBuilt: string;
    address: {
      line: string;
      city: string;
      state: string;
    };
    associates: string[];
    architect: string;
    investorOrOwner: string;
    coordinates: {
      type: string;
      coordinates: [number, number];
    };
    todayPurpose: {
      type: string;
      notes: string;
    };
  };
  emb: string;
  originalData: {
    generalDescription: string;
    timelineDescription: string;
    floors: string;
    programDescription: string;
    structureDescription: string;
    materiality: {
      exterior: {
        roof: string;
        facade: string;
        carpentry: string;
        parterre: string;
      };
      interior: {
        privateContent: string;
        sharedContent: string;
      };
    };
    context: string;
  };
}
