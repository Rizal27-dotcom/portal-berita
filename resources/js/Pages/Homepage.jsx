import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import Navbar from '@/Components/Navbar';
import Newslist from '@/Components/Homepage/Newslist';
import Paginator from '@/Components/Homepage/Paginator';

export default function Homepage(props) {
    console.log('props :',props)  
    return (
        <div className='min-h-screen bg-slat-50'>
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div className='flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 p-4'>
                <Newslist news={props.news.data} />
            </div>
            <div>
                <Paginator meta={props.news.meta} />
            </div>
        </div>
    )
}