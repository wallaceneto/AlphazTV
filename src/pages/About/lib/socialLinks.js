import {
  faYoutube,
  faSpotify,
  faApple,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { URLs } from "../../../global/utils";

const socialLinks = [
  { icon: faGlobe, url: URLs.xgSite, label: "Site" },
  { icon: faYoutube, url: URLs.xgYoutube, label: "Youtube" },
  { icon: faSpotify, url: URLs.xgSpotify, label: "Spotify" },
  { icon: faApple, url: URLs.xgAppleMusic, label: "Apple Music" },
];

export { socialLinks }; 