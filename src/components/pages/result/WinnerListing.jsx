import React from 'react'

function WinnerListing() {
  return (
    <>
      <div class="app-content content ">
        <div class="content-overlay"></div>
        <div class="header-navbar-shadow"></div>
        <div class="content-wrapper container-xxl p-0">
          <div class="content-header row">
          </div>
          <div class="content-body">
            <section id="responsive-datatable">
              <div class="row">
                <div class="col-12">
                  <div class="card">
                    <div class="card-header border-bottom">
                      <h4 class="card-title">User List</h4>
                    </div>
                    <div class="card-datatable">
                      <div id="DataTables_Table_3_wrapper" class="dataTables_wrapper dt-bootstrap5">
                        <div class="d-flex justify-content-between align-items-center mx-0 row">
                          <div class="col-sm-12 col-md-6">
                            <div class="dataTables_length" id="DataTables_Table_3_length">
                              <label>
                                Show
                                <select name="DataTables_Table_3_length" aria-controls="DataTables_Table_3" class="form-select">
                                  <option value="10">10</option>
                                  <option value="25">25</option>
                                  <option value="50">50</option>
                                  <option value="100">100</option>
                                </select>
                              </label>
                            </div>
                          </div>
                          <div class="col-sm-12 col-md-6">
                            <div id="DataTables_Table_3_filter" class="dataTables_filter float-end">
                              <label>Search:<input type="search" class="form-control" placeholder="" aria-controls="DataTables_Table_3" /></label>
                            </div>
                          </div>
                        </div>
                        <table class="dt-responsive table dataTable dtr-column" id="DataTables_Table_3" role="grid" aria-describedby="DataTables_Table_3_info">
                          <thead>
                            <tr role="row">
                              <th class="control sorting_disabled sorting_asc" rowspan="1" colspan="1" aria-label=""></th>
                              <th class="sorting" tabindex="0" aria-controls="DataTables_Table_3" rowspan="1" colspan="1" aria-label="Name: activate to sort column ascending">Profile</th>
                              <th class="sorting" tabindex="0" aria-controls="DataTables_Table_3" rowspan="1" colspan="1" aria-label="Email: activate to sort column ascending">User Name</th>
                              <th class="sorting" tabindex="0" aria-controls="DataTables_Table_3" rowspan="1" colspan="1" aria-label="Post: activate to sort column ascending">User Email</th>
                              <th class="sorting" tabindex="0" aria-controls="DataTables_Table_3" rowspan="1" colspan="1" aria-label="City: activate to sort column ascending">Contact No.</th>
                              <th class="sorting" tabindex="0" aria-controls="DataTables_Table_3" rowspan="1" colspan="1" aria-label="Date: activate to sort column ascending">Date</th>
                              <th class="sorting" tabindex="0" aria-controls="DataTables_Table_3" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending">Status</th>
                              <th class="sorting" tabindex="0" aria-controls="DataTables_Table_3" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending">Action</th>
                            </tr>
                          </thead>
                          {/*
                                                        <tfoot>
                                                            <tr>
                                                                <th class="control" rowspan="1" colspan="1"></th>
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
                            <tr class="odd">
                              <td valign="top" colspan="9" class="dataTables_empty">Loading...</td>
                            </tr>
                          </tbody>
                        </table>
                        <div class="d-flex justify-content-between mx-0 row">
                          <div class="col-sm-12 col-md-6"><div class="dataTables_info" id="DataTables_Table_3_info" role="status" aria-live="polite">Showing 0 to 0 of 0 entries</div></div>
                          <div class="col-sm-12 col-md-6">
                            <div class="dataTables_paginate paging_simple_numbers" id="DataTables_Table_3_paginate">
                              <ul class="pagination">
                                <li class="paginate_button page-item previous disabled" id="DataTables_Table_3_previous"><a href="#" aria-controls="DataTables_Table_3" data-dt-idx="0" tabindex="0" class="page-link">&nbsp;</a></li>
                                <li class="paginate_button page-item next disabled" id="DataTables_Table_3_next"><a href="#" aria-controls="DataTables_Table_3" data-dt-idx="1" tabindex="0" class="page-link">&nbsp;</a></li>
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

export default WinnerListing