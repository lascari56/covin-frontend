import VinSVG from "./images/vin"
import NumberSVG from "./images/number"
import CarCrashSVG from "./images/car-crash"
import OdometrSVG from "./images/odometr"
import CircleSVG from "./images/circle"
import KeySVG from "./images/key"
import LocationSVG from "./images/location"
import DocumentSVG from "./images/document"
import FuelTypeSVG from "./images/fuel-type"
import DriveTrainSVG from "./images/drive-train"

export const meta = [
  [
    {
      key: "vin",
      icon: VinSVG
    },
    {
      key: "lot_id",
      icon: NumberSVG
    },
    {
      key: "damage_pr",
      icon: CarCrashSVG
    },
    {
      key: "damage_sec",
      icon: CarCrashSVG
    }
  ],
  [
    {
      key: "odometer",
      icon: OdometrSVG
      
    },
    {
      key: "status",
      icon: CircleSVG
    },
    {
      key: "keys",
      icon: KeySVG
    },
    {
      key: "loss",
      icon: CircleSVG
    }
  ],
  [
    {
      key: "location",
      icon: LocationSVG
    },
    {
      key: "document",
      icon: DocumentSVG
    },
    {
      key: "fuel",
      icon: FuelTypeSVG
    },
    {
      key: "transmission",
      icon: DriveTrainSVG
    }
  ]
]