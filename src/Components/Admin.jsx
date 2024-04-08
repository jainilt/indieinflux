import React from 'react'
import Navigation_btns from './Navigation_btns';
import Drop6_360_Compo from './Drop6_360_Compo';
import AddItem from './AddItem';
import EditItem from './EditItem';
import DeleteItem from './DeleteItem';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
function Navigation() {
    return (
        <>
            <nav className="navbar navbar-dark sticky-top flex-md-nowrap p-0">
                <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">IndieInflux</a>
                
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                       <Link to="/Navigation_btns">Sign out</Link>
                    </li>
                </ul>
            </nav>
            <div className="container-fluid">
                <div className="row">
                    <nav className="col-md-2 d-none d-md-block sidebar">
                        <div className="sidebar-sticky">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Link to="/">
                                        <i className="zmdi zmdi-widgets"></i>
                                        Dashboard <span className="sr-only">(current)</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/AddItem">
                                        <i className="zmdi zmdi-file-text"></i>
                                        Add Item
                                    </Link>
                                </li>
                                <Link to="/EditItem"><li className="nav-item">
                                    <i className="zmdi zmdi-shopping-cart"></i>
                                    Edit Item
                                </li></Link>
                                <Link to="/DeleteItem"> <li className="nav-item">
                                    <i className="zmdi zmdi-chart"></i>
                                    Delete Item
                                </li></Link>
                            </ul>
                        </div>
                    </nav>
                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 my-3">
                        <div className="card-list">
                            <div className="row">
                                <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
                                    <div className="card blue">
                                        <div className="title">all products</div>
                                        <i className="zmdi zmdi-upload"></i>
                                        <div className="value">134</div>

                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
                                    <div className="card green">
                                        <div className="title">Categories</div>
                                        <i className="zmdi zmdi-upload"></i>
                                        <div className="value">5</div>

                                    </div>
                                </div>
                                {/* <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
                          <div className="card orange">
                              <div className="title">total budget</div>
                              <i className="zmdi zmdi-download"></i>
                              <div className="value">$80,990</div>
                              
                          </div>
                      </div> */}
                                {/* <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
                          <div className="card red">
                              <div className="title">new customers</div>
                              <i className="zmdi zmdi-download"></i>
                              <div className="value">3</div>
                              
                          </div>
                      </div> */}
                            </div>
                        </div>
                        <div className="projects mb-4">
                            <div className="projects-inner">
                                <header className="projects-header">
                                    <div className="title">Categories</div>
                                    <div className="count">| 5</div>
                                    <i className="zmdi zmdi-download"></i>
                                </header>
                                <table className="projects-table">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Items</th>
                                            {/* <th>Stock</th> */}
                                            <th className="text-start">Actions</th>
                                        </tr>
                                    </thead>
                                    <tr>
                                        <td>
                                            <p>Drop6</p>
                                            {/* <p>Google</p> */}
                                        </td>
                                        <td>
                                            <p>45</p>
                                            {/* <p className="text-danger">Overdue</p> */}
                                        </td>

                                        <td>
                                            <form className="form" action="#" method="POST">
                                                <select className="action-box">
                                                    <option>Actions</option>
                                                    <option>Add</option>
                                                    <option>Update</option>
                                                    <option>Delete</option>
                                                </select>
                                            </form>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Uniform</p>
                                            {/* <p>Google</p> */}
                                        </td>
                                        <td>
                                            <p>35</p>
                                            {/* <p className="text-danger">Overdue</p> */}
                                        </td>

                                        <td>
                                            <form className="form" action="#" method="POST">
                                                <select className="action-box">
                                                    <option>Actions</option>
                                                    <option>Add</option>
                                                    <option>Update</option>
                                                    <option>Delete</option>
                                                </select>
                                            </form>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Selfridges</p>
                                            {/* <p>Google</p> */}
                                        </td>
                                        <td>
                                            <p>22</p>
                                            {/* <p className="text-danger">Overdue</p> */}
                                        </td>

                                        <td>
                                            <form className="form" action="#" method="POST">
                                                <select className="action-box">
                                                    <option>Actions</option>
                                                    <option>Add</option>
                                                    <option>Update</option>
                                                    <option>Delete</option>
                                                </select>
                                            </form>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Archive</p>
                                            {/* <p>Google</p> */}
                                        </td>
                                        <td>
                                            <p>120</p>
                                            {/* <p className="text-danger">Overdue</p> */}
                                        </td>

                                        <td>
                                            <form className="form" action="#" method="POST">
                                                <select className="action-box">
                                                    <option>Actions</option>
                                                    <option>Add</option>
                                                    <option>Update</option>
                                                    <option>Delete</option>
                                                </select>
                                            </form>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Upcoming</p>
                                            {/* <p>Google</p> */}
                                        </td>
                                        <td>
                                            <p>12</p>
                                            {/* <p className="text-danger">Overdue</p> */}
                                        </td>

                                        <td>
                                            <form className="form" action="#" method="POST">
                                                <select className="action-box">
                                                    <option>Actions</option>
                                                    <option>Add</option>
                                                    <option>Update</option>
                                                    <option>Delete</option>
                                                </select>
                                            </form>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>

                    </main>
                </div>
            </div>

        </>
    );
}
function Admin() {
    return (

        <Routes>

            <Route path="/AddItem" element={<AddItem />} />
            <Route path="/EditItem" element={<EditItem />} />
            <Route path="/DeleteItem" element={<DeleteItem />} />
            <Route path="/Navigation_btns" element={<Navigation_btns />} />
            <Route
                path="/*"
                element={<Navigation />}
            />
        </Routes>

    );
}

export default Admin