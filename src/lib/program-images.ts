import workshopImg from "@/assets/spotlight-workshop.jpg";
import weldingAsset from "@/assets/Picture68.jpg.asset.json";
import maintenanceAsset from "@/assets/Picture63.jpg.asset.json";
import electricalAsset from "@/assets/Picture73.jpg.asset.json";
import commissioningAsset from "@/assets/Picture61.jpg.asset.json";
import culinaryKitchenAsset from "@/assets/Picture74.jpg.asset.json";
import culinarySupervisionAsset from "@/assets/Picture75-2.jpg.asset.json";
import barServiceAsset from "@/assets/Picture46.jpg.asset.json";
import serviceTeamAsset from "@/assets/Picture47.jpg.asset.json";
import itSupportAsset from "@/assets/Picture38.jpg.asset.json";
import itHardwareAsset from "@/assets/Picture41.jpg.asset.json";
import itLabAsset from "@/assets/Picture48.jpg.asset.json";
import itNetworkAsset from "@/assets/Picture51.jpg.asset.json";
import adminBindingAsset from "@/assets/Picture14.jpg.asset.json";
import adminCopyAsset from "@/assets/Picture15.jpg.asset.json";
import adminTrainingAsset from "@/assets/Picture16.jpg.asset.json";
import adminOfficeAsset from "@/assets/Picture19.jpg.asset.json";
import plumbingAsset from "@/assets/Picture54.jpg.asset.json";
import racAsset from "@/assets/Picture11.jpg.asset.json";
import electricalInstallAsset from "@/assets/Picture22.jpg.asset.json";
import scaffoldingAsset from "@/assets/Picture56.jpg.asset.json";
import foodPrepAsset from "@/assets/Picture74-2.jpg.asset.json";
import ndMechanicalAsset from "@/assets/Picture67.jpg.asset.json";
import ndElectricalAsset from "@/assets/Picture13.jpg.asset.json";
import ndComputerAsset from "@/assets/Picture48.jpg.asset.json";
import ndHospitalityAsset from "@/assets/Picture75.jpg.asset.json";
import ndWeldingAsset from "@/assets/Picture68.jpg.asset.json";
import ndBuildingAsset from "@/assets/Picture56.jpg.asset.json";
import ndBusinessAsset from "@/assets/Picture16.jpg.asset.json";
import electricalImg from "@/assets/news-electrical.jpg";
import ictImg from "@/assets/news-ict.jpg";
import graduationImg from "@/assets/news-graduation.jpg";
import campusImg from "@/assets/campus.jpg";
import { getProgram } from "@/data/programs";

const POOL = [workshopImg, electricalImg, ictImg, graduationImg, campusImg];

// Placeholder imagery per programme family until real photography is supplied.
const BY_CATEGORY: Record<string, string> = {
  Engineering: workshopImg,
  "Hospitality & Culinary": campusImg,
  ICT: ictImg,
  "Business & Education": graduationImg,
  "Skills Proficiency": electricalImg,
};

const BY_SLUG: Record<string, string> = {
  "engineering-fabrication-welding-l3": weldingAsset.url,
  "engineering-maintenance-technology-l2": maintenanceAsset.url,
  "engineering-electrical-electronic-l3": electricalAsset.url,
  "engineering-maintenance-installation-commissioning-l3": commissioningAsset.url,
  "food-preparation-culinary-arts-l2": culinaryKitchenAsset.url,
  "culinary-arts-patisserie-l2": culinaryKitchenAsset.url,
  "food-and-beverage-service-l2": barServiceAsset.url,
  "culinary-arts-supervision-l3": culinarySupervisionAsset.url,
  "professional-patisserie-confectionery-l3": culinarySupervisionAsset.url,
  "food-safety-in-catering-l2": serviceTeamAsset.url,
  "it-systems-support-l2": itSupportAsset.url,
  "it-systems-support-l3": itHardwareAsset.url,
  "ict-professionals-systems-principles-l4": itNetworkAsset.url,
  "ict-professionals-systems-principles-l4-unit-route": itLabAsset.url,
  "principles-business-administration-l2": adminBindingAsset.url,
  "principles-business-administration-l3": adminOfficeAsset.url,
  "business-support-l2": adminCopyAsset.url,
  "business-support-l3": adminBindingAsset.url,
  "teaching-training-assessing-learning-l3": adminTrainingAsset.url,
  "basic-plumbing": plumbingAsset.url,
  "basic-refrigeration-air-conditioning": racAsset.url,
  "basic-electrical-installation": electricalInstallAsset.url,
  scaffolding: scaffoldingAsset.url,
  "food-preparation-proficiency": foodPrepAsset.url,
  "nd-mechanical-engineering-technology": ndMechanicalAsset.url,
  "nd-electrical-and-electronics-engineering-technology": ndElectricalAsset.url,
  "nd-computer-science": ndComputerAsset.url,
  "nd-hospitality-management-technology": ndHospitalityAsset.url,
  "nd-welding-and-fabrication-technology": ndWeldingAsset.url,
  "nd-building-technology": ndBuildingAsset.url,
  "nd-business-administration-and-management": ndBusinessAsset.url,
};

export function programImage(slug: string, index = 0) {
  if (BY_SLUG[slug]) return BY_SLUG[slug];
  const category = getProgram(slug)?.category;
  return (category && BY_CATEGORY[category]) || POOL[index % POOL.length];
}
