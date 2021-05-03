import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as footerStyles from "./footer.module.scss"

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.footerInner}>
        <h3 className={footerStyles.title}>Jövője Van Alapítvány</h3>
        <p>Áldott állapot - állapotos - várandós - viselős - terhes - fogamzásgátlási hiba - <strong>Jövője Van!</strong></p>
        <h3 className={footerStyles.title}>Támogatóink</h3>
        <nav className={footerStyles.tamogatok}>
          <Link to="https://egyuttazeletert.org/" target="_blank">
            <StaticImage
              loading="eager"
              className={footerStyles.tamogatoLogo}
              objectFit="contain"
              src="../images/logo-egyutt-az-eletert.png"
              alt="Együtt az Életért" />
            <p>Együtt az Életért</p>
          </Link>
          <Link to="http://billings.hu/" target="_blank">
            <StaticImage
              loading="eager"
              className={footerStyles.tamogatoLogo}
              objectFit="contain"
              src="../images/logo-billings.jpg"
              alt="Magyarországi Billings Központ" />
            <p>Magyarországi Billings Központ</p>
          </Link>
          <Link to="https://www.citizengo.org/" target="_blank">
            <StaticImage
              loading="eager"
              className={footerStyles.tamogatoLogo}
              objectFit="contain"
              src="../images/logo-citizengo.png"
              alt="CitizenGo" />
            <p>CitizenGo</p>
          </Link>
          <Link to="https://csaladtudomany.hu/" target="_blank">
            <StaticImage
              loading="eager"
              className={footerStyles.tamogatoLogo}
              objectFit="contain"
              src="../images/logo-csalad-tudomanyi-szovetseg.png"
              alt="Család Tudományi Szövetség" />
            <p>Család Tudományi Szövetség</p>
          </Link>
          <Link to="http://efi.szentendre.hu/" target="_blank">
            <StaticImage
              loading="eager"
              className={footerStyles.tamogatoLogo}
              objectFit="contain"
              src="../images/logo-efi.png"
              alt="Szentendrei Járási Egészségfejlesztési Iroda" />
            <p>Szentendrei Járási Egészségfejlesztési Iroda</p>
          </Link>
          <Link to="https://mltsg.wordpress.com/" target="_blank">
            <StaticImage
              loading="eager"
              className={footerStyles.tamogatoLogo}
              objectFit="contain"
              src="../images/logo-emberi-meltosag-kozpont.png"
              alt="Emberi Méltóság Központ" />
            <p>Emberi Méltóság Központ</p>
          </Link>
          <Link to="https://adjukossze.hu/obh/szervezet/jozsef-szovetseg-egyesulet-122654">
            <StaticImage
              loading="eager"
              className={footerStyles.tamogatoLogo}
              objectFit="contain"
              src="../images/logo-jsz.png"
              alt="József Szövetség" />
            <p>József Szövetség</p>
          </Link>
          <Link to="https://www.dessacreative.com/" target="_blank">
            <StaticImage
              loading="eager"
              className={footerStyles.tamogatoLogo}
              objectFit="contain"
              src="../images/logo-dessa-creative.png"
              alt="DESSA Creative" />
            <p>DESSA Creative</p>
          </Link>
        </nav>
        <h3 className={footerStyles.title}>Számlaszám</h3>
        <p>Jövője Van Alapítvány: OTP Bank NYrt.</p>
        <p>Számlaszám: 11742087-24275570</p>
        <p>IBAN-szám: HU18117420872427557000000000</p>
      </div>
    </footer>
  )
}
