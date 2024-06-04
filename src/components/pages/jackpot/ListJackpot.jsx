import React from 'react'

function ListJackpot() {
  return (
    <>
      <div className="app-content content ">
        <div className="content-overlay"></div>
        <div className="header-navbar-shadow"></div>
        <div className="content-wrapper container-xxl p-0">
          <div className="content-header row">
          </div>
          <div className="content-body">
            <section id="responsive-datatable">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header border-bottom">
                      <h4 className="card-title">Jackpot List</h4>
                    </div>
                    <div className="card-datatable">
                      <div id="DataTables_Table_3_wrapper" className="dataTables_wrapper dt-bootstrap5">
                        <div className="d-flex justify-content-between align-items-center mx-0 row">
                          <div className="col-sm-12 col-md-6">
                            <div className="dataTables_length" id="DataTables_Table_3_length">
                              <label>
                                Show
                                <select name="DataTables_Table_3_length" aria-controls="DataTables_Table_3" className="form-select">
                                  <option value="10">10</option>
                                  <option value="25">25</option>
                                  <option value="50">50</option>
                                  <option value="100">100</option>
                                </select>
                              </label>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6">
                            <div id="DataTables_Table_3_filter" className="dataTables_filter float-end">
                              <label>Search:<input type="search" className="form-control" placeholder="" aria-controls="DataTables_Table_3" /></label>
                            </div>
                          </div>
                        </div>
                        <table className="dt-responsive table dataTable dtr-column" id="DataTables_Table_3" role="grid" aria-describedby="DataTables_Table_3_info">
                          <thead>
                            <tr role="row">
                              <th className="control sorting_disabled sorting_asc" rowspan="1" colspan="1" aria-label=""></th>
                              <th className="sorting">User Name</th>
                              <th className="sorting">Prize Pool</th>
                              <th className="sorting">Contact No.</th>
                              <th className="sorting">Starting Date</th>
                              <th className="sorting">Status</th>
                              <th className="sorting">Action</th>
                            </tr>
                          </thead>
                          {/*
                                                <tfoot>
                                                    <tr>
                                                        <th className="control" rowspan="1" colspan="1"></th>
                                                        <th rowspan="1" colspan="1">Name</th>
                                                        <th rowspan="1" colspan="1">Email</th>
                                                        <th rowspan="1" colspan="1">Post</th>
                                                        <th rowspan="1" colspan="1">City</th>
                                                        <th rowspan="1" colspan="1">Date</th>
                                                        <th rowspan="1" colspan="1">Salary</th>
                                                        <th rowspan="1" colspan="1">Age</th>
                                                        <th rowspan="1" colspan="1">Experience</th>
                                                        <th rowspan="1" colspan="1">Status</th>
                                                    </tr>
                                                </tfoot>
                                                */}
                          <tbody>
                            <tr className="odd">
                              <td valign="top" colspan="9" className="dataTables_empty">Loading...</td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="d-flex justify-content-between mx-0 row">
                          <div className="col-sm-12 col-md-6"><div className="dataTables_info" id="DataTables_Table_3_info" role="status" aria-live="polite">Showing 0 to 0 of 0 entries</div></div>
                          <div className="col-sm-12 col-md-6">
                            <div className="dataTables_paginate paging_simple_numbers" id="DataTables_Table_3_paginate">
                              <ul className="pagination">
                                <li className="paginate_button page-item previous disabled" id="DataTables_Table_3_previous"><a href="#" aria-controls="DataTables_Table_3" data-dt-idx="0" tabindex="0" className="page-link">&nbsp;</a></li>
                                <li className="paginate_button page-item next disabled" id="DataTables_Table_3_next"><a href="#" aria-controls="DataTables_Table_3" data-dt-idx="1" tabindex="0" className="page-link">&nbsp;</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default ListJackpot