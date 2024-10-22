import { Container, Grid } from '@mui/material';
import breadcrumbStyle from './breadcrumb.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { typeOf } from '@utils/typeOf.utils';

interface IBreadcrumb{
  title: string | string[];
}
export default function Breadcrumb({title}: IBreadcrumb) {
  const isString: boolean = typeOf(title) === 'string';
  return isString ? (
    <div className={`${breadcrumbStyle['container']} set-bg`}>
      <Container>
        <Grid container>
          <Grid item xs={12} sx={{textAlign: 'center'}}>
            <div className={breadcrumbStyle['text']}>
              <h2>{title}</h2>
              <div className={breadcrumbStyle['link']}>
                <Link href={'/'}>
                  <FontAwesomeIcon icon={faHouseChimney} />
                  home
                  <FontAwesomeIcon icon={faChevronRight} />
                </Link>
                <span>{title}</span>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  ) : (
    <div className={`${breadcrumbStyle['container']} set-bg`}>
      <Container>
        <Grid container>
          <Grid item xs={12} sx={{textAlign: 'center'}}>
            <div className={breadcrumbStyle['text']}>
              <h2>{title[title.length - 1]}</h2>
              <div className={breadcrumbStyle['link']}>
                <Link href={'/'}>
                  <FontAwesomeIcon icon={faHouseChimney} />
                  home
                  <FontAwesomeIcon icon={faChevronRight} />
                </Link>
                {
                  Array.isArray(title) ? (
                    title.map((item, index) => (
                      index < title.length - 1 ? (
                        <Link key={index} href={`/${item}`}>
                          {item}
                          {index < title.length - 1 && <FontAwesomeIcon icon={faChevronRight} />}
                        </Link>
                      ) : null
                    ))
                  ) : null
                }
                <span>{title[title.length - 1]}</span>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
