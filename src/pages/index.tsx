import {DateTime} from 'luxon';
import type { InferGetStaticPropsType, PageConfig } from 'next';
import Head from 'next/head';
import Navbar from 'react-bootstrap/Navbar';
import { data } from '../data/data';
import { IndexHelpers } from '../indexHelpers';


export default function Home(props: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <Head>
                <title>Linki żeglarskie</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            
            <Navbar>
                <Navbar.Brand>
                    Linki żeglarskie
                </Navbar.Brand>
            </Navbar>

            {props.data.map(IndexHelpers.renderSection)}
            
            <Navbar fixed='bottom'>
                <Navbar.Text>
                    Build: {props.buildDate}
                </Navbar.Text>
            </Navbar>
        </>
    );
}

export const getStaticProps = async () => {
    return {
        props: {
            data,
            buildDate: DateTime.utc().toFormat('dd/LL/yyyy TTT')
        }
    };
};

export const config: PageConfig = {
    unstable_runtimeJS: false
}
