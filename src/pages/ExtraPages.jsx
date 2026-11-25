import { useState } from 'react';
import Reveal from '../components/common/Reveal';
import { destinations } from '../data/tempat';
import { blogs } from '../data/artikel';

const banner = 'https://images.unsplash.com/photo-1540946485063-a40da27545f8?q=80&w=2000';
function PageBanner({ title }) {
  return <section className="page-banner" style={{ backgroundImage: `url('${banner}')` }}><div className="container text-center page-banner-content"><span className="label-script">Explore with Tripzap</span><h1>{title}</h1><p className="page-breadcrumb">Home <i className="bi bi-chevron-right" /> {title}</p></div></section>;
}

export function DestinationsPage() {
  return <><PageBanner title="Popular Destinations" /><section className="section-pad"><div className="container"><div className="text-center mb-5"><span className="label-script">Places to go</span><h2 className="section-title">Discover Beautiful Destinations</h2><p className="text-muted mt-3">Find your next escape and enjoy the ocean from a different perspective.</p></div><div className="row g-4">{destinations.map((d, i) => <Reveal key={d.name} animasi="fadeIn" className="col-lg-4 col-md-6"><article className="extra-image-card"><img src={d.image} alt={d.name}/><div><span>0{i+1} / Destination</span><h3>{d.name}</h3><a href="#contact">Explore destination <i className="bi bi-arrow-right"/></a></div></article></Reveal>)}</div></div></section></>;
}

export function BlogPage() {
  return <><PageBanner title="Blog Grid"/><section className="section-pad"><div className="container"><div className="text-center mb-5"><span className="label-script">Blogs & News</span><h2 className="section-title">Our Latest News Feed</h2></div><div className="row g-4">{blogs.map((b,i)=><Reveal key={b.title} animasi="fadeIn" className="col-lg-4 col-md-6"><article className="extra-blog-card"><div className="extra-blog-image"><img src={b.image} alt={b.title}/></div><div className="p-4"><small><i className="bi bi-calendar3 me-2"/>November {12+i}, 2026 <span className="mx-2">•</span> Boat Trip</small><h3>{b.title}</h3><p>Discover stories, travel inspiration, and the latest news from the world of yacht charter.</p><a href="#contact">Read More <i className="bi bi-arrow-right"/></a></div></article></Reveal>)}</div></div></section></>;
}

export function ContactPage() {
 const [sent,setSent]=useState(false);
 return <><PageBanner title="Contact Us"/><section className="section-pad" id="contact"><div className="container"><div className="row g-5 align-items-start"><div className="col-lg-5"><span className="label-script">Get in touch</span><h2 className="section-title mb-3">Interested in Chartering Your Yacht?</h2><p className="text-muted">Have a question or want to plan your next trip? Send us a message and our team will get back to you.</p><div className="contact-detail"><i className="bi bi-geo-alt"/><div><b>Our Location</b><br/>2976 Sunrise Avenue, Las Vegas</div></div><div className="contact-detail"><i className="bi bi-envelope"/><div><b>Email Address</b><br/>example@mail.com</div></div><div className="contact-detail"><i className="bi bi-telephone"/><div><b>Phone Number</b><br/>+9 91230 456 789</div></div></div><div className="col-lg-7"><form className="contact-form" onSubmit={e=>{e.preventDefault();setSent(true)}}><div className="row g-3"><div className="col-md-6"><input className="form-control" placeholder="Your Name" required/></div><div className="col-md-6"><input className="form-control" type="email" placeholder="Email Address" required/></div><div className="col-12"><input className="form-control" placeholder="Subject" required/></div><div className="col-12"><textarea className="form-control" rows="6" placeholder="Write your message..." required/></div><div className="col-12"><button className="btn-fill-cyan" type="submit">Send Message <i className="bi bi-arrow-right ms-2"/></button>{sent&&<p className="text-success mt-3 mb-0">Thank you! Your message is ready.</p>}</div></div></form></div></div></div></section></>;
}
