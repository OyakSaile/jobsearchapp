import {
  CardContainer,
  CardLogoJob,
  CardInformationJob,
  CardInformationSallary,
  TopButtons,
} from "./style";
import githubImage from "../../assets/githubImage.svg";
import { FiMapPin, FiStar, FiInfo } from "react-icons/fi";
export function Card() {
  return (
    <CardContainer>
      <CardLogoJob>
        <img src={githubImage} alt="Nome da Empresa" />
      </CardLogoJob>
      <CardInformationJob>
        <h1>Lorem Ipsum</h1>
        <h2>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h2>

        <span>
          <FiMapPin />
          <p>Rio de Janeiro, RJ</p>
        </span>

        <div className="time">
          <p>3 dias</p>
          <p>Integral</p>
        </div>
      </CardInformationJob>
      <CardInformationSallary>
        <h2>Team</h2>
        <p>Web Design</p>
        <span>R$ 5000,00</span>
      </CardInformationSallary>

      <TopButtons>
        <div>
          <FiStar color="#E9D1AF" />
          <FiInfo color="#CCCCCC" />
        </div>
      </TopButtons>
    </CardContainer>
  );
}
