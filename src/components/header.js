import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as headerStyles from "./header.module.scss"

export default function Header(props) {
  const data = useStaticQuery(graphql`
    query DataQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.headerInner}>
        <div className={headerStyles.headerLeft}>
          <h1 className={headerStyles.siteName}>{data.site.siteMetadata.title}</h1>
          <div className={headerStyles.logoOuter}>
            <div className={headerStyles.logoInner}>
              <StaticImage
                loading="eager"
                className={headerStyles.logoImage}
                objectFit="contain"
                src="../images/logo-jovoje-van.png"
                alt="{data.site.siteMetadata.title}" />
            </div>
          </div>
        </div>
        <nav className={headerStyles.siteNavigation}>
          <Link className={props.active === 'rolunk' ? headerStyles.active : null} to="/rolunk">Rólunk</Link>
          <span className={headerStyles.navBullet}>&#8226;</span>
          <Link className={props.active === 'tevekenysegunk' ? headerStyles.active : null} to="/tevekenysegunk">Tevékenységünk</Link>
          <span className={headerStyles.navBullet}>&#8226;</span>
          <Link className={props.active === 'tagozatok' ? headerStyles.active : null} to="/tagozatok">Tagozatok</Link>
          <span className={headerStyles.navBullet}>&#8226;</span>
          <Link className={props.active === 'esemenyek' ? headerStyles.active : null} to="/esemenyek">Események</Link>
          <span className={headerStyles.navBullet}>&#8226;</span>
          <Link className={props.active === 'kapcsolat' ? headerStyles.active : null} to="/kapcsolat">Kapcsolat</Link>
        </nav>
      </div>
    </header>
  )
}