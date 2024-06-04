import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <>
    <div className="main-menu menu-fixed menu-light menu-accordion menu-shadow" data-scroll-to-active="true">
        <div className="navbar-header">
            <ul className="nav navbar-nav flex-row">
                <li className="nav-item me-auto"><Link to="/" className="navbar-brand" ><span className="brand-logo">
                            <svg viewbox="0 0 139 95" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="24">
                                <defs>
                                    <lineargradient id="linearGradient-1" x1="100%" y1="10.5120544%" x2="50%" y2="89.4879456%">
                                        <stop stopColor="#000000" offset="0%"></stop>
                                        <stop stopColor="#FFFFFF" offset="100%"></stop>
                                    </lineargradient>
                                    <lineargradient id="linearGradient-2" x1="64.0437835%" y1="46.3276743%" x2="37.373316%" y2="100%">
                                        <stop stopColor="#EEEEEE" stopOpacity="0" offset="0%"></stop>
                                        <stop stopColor="#FFFFFF" offset="100%"></stop>
                                    </lineargradient>
                                </defs>
                                <g id="Page-1" stroke="none" fill="none">
                                    <g id="Artboard" transform="translate(-400.000000, -178.000000)">
                                        <g id="Group" transform="translate(400.000000, 178.000000)">
                                            <path className="text-primary" id="Path" d="M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z" ></path>
                                            <path id="Path1" d="M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z" fill="url(#linearGradient-1)" opacity="0.2"></path>
                                            <polygon id="Path-2" fill="#000000" opacity="0.049999997" points="69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325"></polygon>
                                            <polygon id="Path-21" fill="#000000" opacity="0.099999994" points="69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338"></polygon>
                                            <polygon id="Path-3" fill="url(#linearGradient-2)" opacity="0.099999994" points="101.428699 0 83.0667527 94.1480575 130.378721 47.0740288"></polygon>
                                        </g>
                                    </g>
                                </g>
                            </svg></span>
                        <h2 className="brand-text">Vuexy</h2>
                    </Link></li>
                <li className="nav-item nav-toggle"><a className="nav-link modern-nav-toggle pe-0" data-bs-toggle="collapse"><i className="d-block d-xl-none text-primary toggle-icon font-medium-4" data-feather="x"></i><i className="d-none d-xl-block collapse-toggle-icon font-medium-4  text-primary" data-feather="disc" data-ticon="disc"></i></a></li>
            </ul>
        </div>
        <div className="shadow-bottom"></div>
        <div className="main-menu-content">
            <ul className="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
                <li className=" nav-item"><Link to="/" className="d-flex align-items-center"><i data-feather="home"></i><span className="menu-title text-truncate" data-i18n="Dashboards">Dashboards</span><span className="badge badge-light-warning rounded-pill ms-auto me-1">2</span></Link>
                    {/* <ul className="menu-content">
                        <li><Link to="/" className="d-flex align-items-center"><i data-feather="circle"></i><span className="menu-item text-truncate" data-i18n="Analytics">Analytics</span></Link>
                        </li>
                        <li className="active"><Link to="/" className="d-flex align-items-center"><i data-feather="circle"></i><span className="menu-item text-truncate" data-i18n="eCommerce">eCommerce</span></Link>
                        </li>
                    </ul> */}
                </li>
                <li className=" navigation-header"><span data-i18n="Apps &amp; Pages">Apps &amp; Pages</span><i data-feather="more-horizontal"></i>
                </li>
                <li className=" nav-item"><a className="d-flex align-items-center"><i data-feather="file-text"></i><span className="menu-title text-truncate" data-i18n="Invoice">User Master</span></a>
                    <ul className="menu-content">
                        <li><Link to="userlist" className="d-flex align-items-center" ><i data-feather="circle"></i><span className="menu-item text-truncate" data-i18n="List">User List</span></Link>
                        </li>
                        <li><Link to="/userdetails" className="d-flex align-items-center" ><i data-feather="circle"></i><span className="menu-item text-truncate" data-i18n="Preview">User Detail</span></Link>
                        </li>
                        
                    </ul>
                </li>
                <li className=" nav-item"><a className="d-flex align-items-center"><i data-feather="shield"></i><span className="menu-title text-truncate" data-i18n="Roles &amp; Permission">Jackpot Master</span></a>
                    <ul className="menu-content">
                        <li><Link to="/create-jackpot" className="d-flex align-items-center" ><i data-feather="circle"></i><span className="menu-item text-truncate" data-i18n="Roles">Create Jackpot</span></Link>
                        </li>
                        <li><Link to="/list-jackpot" className="d-flex align-items-center"><i data-feather="circle"></i><span className="menu-item text-truncate" data-i18n="Permission">Jackpot List</span></Link>
                        </li>
                    </ul>
                </li>
                <li className=" nav-item"><a className="d-flex align-items-center"><i data-feather="shopping-cart"></i><span className="menu-title text-truncate" data-i18n="eCommerce">Result Master</span></a>
                    <ul className="menu-content">
                        <li><Link to="/" className="d-flex align-items-center"><i data-feather="circle"></i><span className="menu-item text-truncate" data-i18n="Shop">Jackpot Result</span></Link>
                        </li>
                        <li><Link to="/" className="d-flex align-items-center"><i data-feather="circle"></i><span className="menu-item text-truncate" data-i18n="Details">Random</span></Link>
                        </li>
                        <li><Link to="/" className="d-flex align-items-center"><i data-feather="circle"></i><span className="menu-item text-truncate" data-i18n="Wish List">Winner List</span></Link>
                        </li>
                       
                    </ul>
                </li>
                <li className=" nav-item"><a  className="d-flex align-items-center"><i data-feather="user"></i><span className="menu-title text-truncate" data-i18n="User">Setting</span></a>
                    <ul className="menu-content">
                        <li><Link to="/" className="d-flex align-items-center"><i data-feather="circle"></i><span className="menu-item text-truncate" data-i18n="List">Help & Support </span></Link>
                        </li>
                        <li><Link to="/" className="d-flex align-items-center"><i data-feather="circle"></i><span className="menu-item text-truncate" data-i18n="View">About Us</span></Link>
                           
                        </li>
                        <li><Link to="/" className="d-flex align-items-center"><i data-feather="circle"></i><span className="menu-item text-truncate" data-i18n="List">Refund Policy </span></Link>
                        </li>
                        <li><Link to="/" className="d-flex align-items-center"><i data-feather="circle"></i><span className="menu-item text-truncate" data-i18n="List">Terms & Conditions </span></Link>
                        </li>
                    </ul>
                </li>
                <li className=" nav-item"><a  className="d-flex align-items-center"><i data-feather="file-text"></i><span className="menu-title text-truncate" data-i18n="Pages">Notification Master</span></a>
                    <ul className="menu-content">
                        <li><Link to="/" className="d-flex align-items-center"><i data-feather="circle"></i><span className="menu-item text-truncate" data-i18n="Account Settings">Notification</span></Link>
                    
                        </li>
                    </ul>
                </li>
                <li className=" nav-item"><a  className="d-flex align-items-center"><i data-feather="user-check"></i><span className="menu-title text-truncate" data-i18n="Authentication">Verification KYC</span></a>
                    <ul className="menu-content">
                        <li><Link to="/" className="d-flex align-items-center"><i data-feather="circle"></i><span className="menu-item text-truncate" data-i18n="Login">KYC Verification</span></Link>
                        </li>
                        
                    </ul>
                </li>
                
                <li className=" nav-item"><a  className="d-flex align-items-center"><i data-feather="user-check"></i><span className="menu-title text-truncate" data-i18n="Authentication">Image Banner</span></a>
                    <ul className="menu-content">
                        <li><Link to="/" className="d-flex align-items-center"><i data-feather="circle"></i><span className="menu-item text-truncate" data-i18n="Login">Add Image Banner</span></Link>
                        </li>
                        
                    </ul>
                </li>
                
                
            </ul>
        </div>
    </div>
    </>
  )
}

export default Sidebar