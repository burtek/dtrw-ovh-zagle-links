import { DateTime } from 'luxon';
import Image from 'next/image';
import { Fragment } from 'react';
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import styles from './styles/styles.module.scss';
import { findByCountryCode } from './data/countries';
import type {
    AppByHref,
    AppById,
    AreaDescription,
    CountryDescription,
    Data,
    DataItem,
    LegendItem,
    Link,
    SubItem
} from './data/dataTypes';
import { MobileType } from './data/dataTypes';
import { isLink } from './isLink';
import { legendEmphasis, LegendEmphasis } from './legendEmphasis';

export class LegendHelpers {
    static renderLegendItem(legendItem: LegendItem, legendIndex: number) {
        const item = (
            <Fragment key={`item${legendIndex}`}>
                <sup>{legendItem.key}</sup> - {legendItem.item}
            </Fragment>
        );

        return legendIndex > 0 ? [<br key={`br${legendIndex}`} />, item] : item;
    }
}

export class LinkHelpers {
    static renderLink(link: string | Link) {
        const { href, label = href } = isLink(link) ? link : { href: link };

        return <a href={href}>{label}</a>;
    }
}

export class DescriptionHelpers {
    static renderDataItemDesc(dataItemDesc: string | AreaDescription | CountryDescription) {
        if (typeof dataItemDesc === 'string') {
            return <div dangerouslySetInnerHTML={{ __html: dataItemDesc }} />;
        } else if ('marines' in dataItemDesc && 'area' in dataItemDesc) {
            let marines: string | JSX.Element;

            const hasSea = dataItemDesc.marines === 'all' || dataItemDesc.marines.sea;
            const hasInland = dataItemDesc.marines === 'all' || dataItemDesc.marines.inland;

            const sea = this.renderDataItemDescMarineTypeLabel('Morskie', hasSea);
            const inland = this.renderDataItemDescMarineTypeLabel('Śródlądowe', hasInland);

            if (sea && inland) {
                marines = (
                    <>
                        {sea} i {inland}
                    </>
                );
            } else {
                marines = sea || inland || '';
            }

            return (
                <div>
                    <b>Mariny</b>: {marines}
                    <br />
                    <b>Obszar</b>:{' '}
                    {typeof dataItemDesc.area === 'string' ? (
                        dataItemDesc.area
                    ) : (
                        <>
                            {dataItemDesc.area.area}
                            {dataItemDesc.area.legendItems.map(legendEmphasis)}
                        </>
                    )}
                </div>
            );
        } else {
            return (
                <div>
                    <Image
                        priority
                        width={32}
                        height={32}
                        src={`https://www.countryflags.io/${dataItemDesc.code}/flat/32.png`}
                    />{' '}
                    <b>{findByCountryCode(dataItemDesc.code).name}</b>: {dataItemDesc.label}
                </div>
            );
        }
    }

    static renderDataItemDescMarineTypeLabel(
        description: string,
        available: undefined | true | string
    ): false | JSX.Element {
        return (
            !!available && (
                <>
                    {description}
                    {available !== true && <LegendEmphasis item={available} />}
                </>
            )
        );
    }
}

export class MobileHelpers {
    static renderApps(mobile?: (AppById | AppByHref)[]) {
        if (!mobile) {
            return null;
        }

        return <Col>{mobile.map(MobileHelpers.renderApp)}</Col>;
    }

    private static makeHint(hint?: string) {
        return hint ? ` ${hint}` : '';
    }

    static renderApp(app: AppById | AppByHref, appIndex: number) {
        let href: string;
        let label: string;

        switch (app.type) {
            case MobileType.Android:
                href = `https://play.google.com/store/apps/details?id=${app.id}`;
                label = `Google Play (Android${MobileHelpers.makeHint(app.hint)})`;
                break;
            case MobileType.Apk:
                href = app.href;
                label = `APK (Android${MobileHelpers.makeHint(app.hint)})`;
                break;
            case MobileType.iOS:
                href = `https://itunes.apple.com/pl/app/${app.id}`;
                label = `App Store (iOS${MobileHelpers.makeHint(app.hint)})`;
                break;
            case MobileType.Windows:
                href = `https://www.microsoft.com/pl-pl/p/${app.id}`;
                label = `Microsoft Store${MobileHelpers.makeHint(app.hint)}`;
                break;
            case MobileType.PC:
                href = app.href;
                label = `Aplikacja PC${MobileHelpers.makeHint(app.hint)}`;
                break;
        }

        return (
            <Fragment key={`mobileItem${appIndex}`}>
                {appIndex > 0 && <span style={{ display: 'inline-block', margin: '0 5px' }}>|</span>}
                <a href={href}>{label}</a>
            </Fragment>
        );
    }
}

export class IndexHelpers {
    static renderSection(data: Data, index: number) {
        return (
            <Container key={index} className={styles.section}>
                <Row>
                    <Col>
                        <h1>{data.title}</h1>
                    </Col>
                </Row>
                {data.desc && (
                    <Row>
                        <Col dangerouslySetInnerHTML={{ __html: data.desc }} />
                    </Row>
                )}
                {data.legend && (
                    <Row>
                        <Col>{data.legend.flatMap(LegendHelpers.renderLegendItem)}</Col>
                    </Row>
                )}
                <Row>
                    <Col>
                        <Container>{data.data.map(IndexHelpers.renderDataItem)}</Container>
                    </Col>
                </Row>
            </Container>
        );
    }

    static renderDataItem(dataItem: DataItem, dataItemIndex: number) {
        const isModified =
            (dataItem.createdDate && DateTime.fromISO(dataItem.createdDate).plus({ days: 7 }) > DateTime.local()) ||
            (dataItem.modifiedDate && DateTime.fromISO(dataItem.modifiedDate).plus({ days: 7 }) > DateTime.local());

        return (
            <Row key={`dataItem${dataItemIndex}`} className={styles.row}>
                <Col sm={7} md={6}>
                    {dataItem.star && '⭐ '}
                    {LinkHelpers.renderLink(dataItem.link)}
                    {isModified && (
                        <>
                            {' '}
                            <Badge variant='danger'>NOWE</Badge>
                        </>
                    )}
                </Col>
                <Col sm={5} md={6}>
                    {DescriptionHelpers.renderDataItemDesc(dataItem.desc)}
                </Col>
                {IndexHelpers.renderSubItems(dataItem.subItems)}
                {MobileHelpers.renderApps(dataItem.mobile)}
            </Row>
        );
    }

    static renderSubItems(subItems?: SubItem[]) {
        if (!subItems) {
            return null;
        }

        return (
            <Col>
                <ul>
                    {subItems.map((subItem, subItemIndex) => (
                        <li key={`subItem${subItemIndex}`}>
                            {subItem.desc} {LinkHelpers.renderLink(subItem.link)}
                        </li>
                    ))}
                </ul>
            </Col>
        );
    }
}
