import React from 'react'
import { useState } from 'react'

function CreateJackpot() {

    const [jackpotname , setJackpotname] = useState();
    const [date,setDate] = useState();
    const [prizepool,setPrizepool] = useState();
    const [status,setStatus] = useState();
    const [description,setDescription] = useState();
  return (
    <>
    <div class="app-content content ">
        <div class="content-overlay"></div>
        <div class="header-navbar-shadow"></div>
        <div class="content-wrapper container-xxl p-0">
            <div class="content-header row">
                <div class="content-header-left col-md-9 col-12 mb-2">
                    <div class="row breadcrumbs-top">
                        <div class="col-12">
                            <h2 class="content-header-title float-start mb-0">Add Jackpot</h2>
                            {/* <div class="breadcrumb-wrapper">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="index.html">Home</a>
                                    </li>
                                    <li class="breadcrumb-item"><a href="#">Forms</a>
                                    </li>
                                    <li class="breadcrumb-item active"><a href="#">Form Layouts</a>
                                    </li>
                                </ol>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div class="content-header-right text-md-end col-md-3 col-12 d-md-block d-none">
                    <div class="mb-1 breadcrumb-right">
                        <div class="dropdown">
                            <button class="btn-icon btn btn-primary btn-round btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i data-feather="grid"></i></button>
                            <div class="dropdown-menu dropdown-menu-end"><a class="dropdown-item" href="app-todo.html"><i class="me-1" data-feather="check-square"></i><span class="align-middle">Todo</span></a><a class="dropdown-item" href="app-chat.html"><i class="me-1" data-feather="message-square"></i><span class="align-middle">Chat</span></a><a class="dropdown-item" href="app-email.html"><i class="me-1" data-feather="mail"></i><span class="align-middle">Email</span></a><a class="dropdown-item" href="app-calendar.html"><i class="me-1" data-feather="calendar"></i><span class="align-middle">Calendar</span></a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-body">
                <section id="basic-horizontal-layouts">
                    <div class="row">
                        <div class="col-md-12 col-12">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title">Create Jackpot</h4>
                                </div>
                                <div class="card-body">
                                    <form class="form form-horizontal">
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="mb-1">
                                                        <label class="col-form-label" for="fname-icon">Jackpot Name</label>
                                                        <div class="input-group input-group-merge">
                                                            {/* <span class="input-group-text"><i data-feather="user"></i></span> */}
                                                            <input type="text" onChange={(e) => setJackpotname(e.target.value)} id="fname-icon" class="form-control" name="fname-icon" placeholder="Jackpot Name" />
                                                        </div>
                                                </div>
                                            </div>
                                            
                                            <div class="col-6">
                                                <div class="mb-1">
                                                        <label class="col-form-label" for="contact-icon">Starting Date</label>
                                                        <div class="input-group input-group-merge">
                                                            {/* <span class="input-group-text"><i data-feather="smartphone"></i></span> */}
                                                            <input type="number" onChange={(e) => setDate(e.target.value)} id="contact-icon" class="form-control" name="contact-icon" placeholder="Mobile" />
                                                        </div>
                                                    
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="mb-1">
                                                        <label class="col-form-label" for="pass-icon">Prize Pool</label>
                                                        <div class="input-group input-group-merge">
                                                            {/* <span class="input-group-text"><i data-feather="lock"></i></span> */}
                                                            <input type="text" onChange={(e) => setPrizepool(e.target.value)} id="pass-icon" class="form-control" name="contact-icon" placeholder="Prize Pool" />
                                                        </div>
                                                    
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="mb-1">
                                                        <label class="col-form-label" for="pass-icon">Status</label>
                                                        <div class="input-group input-group-merge">
                                                            {/* <span class="input-group-text"><i data-feather="lock"></i></span> */}
                                                            <input type="text" onChange={(e) => setStatus(e.target.value)} id="pass-icon" class="form-control" name="contact-icon" placeholder="Password" />
                                                        </div>
                                                    
                                                </div>
                                            </div>

                                            <div class="col-12">
                                                <div class="mb-1">
                                                        <label class="col-form-label" for="email-icon">Description</label>
                                                        <div class="input-group input-group-merge">
                                                            {/* <span class="input-group-text"><i data-feather="message"></i></span> */}
                                                            <textarea onChange={(e) => setDescription(e.target.value)} class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Textarea"></textarea>
                                                        </div>
                                                    
                                                </div>
                                            </div>
                                            {/* <div class="col-sm-9 offset-sm-3">
                                                <div class="mb-1">
                                                    <div class="form-check">
                                                        <input type="checkbox" class="form-check-input" id="customCheck2" />
                                                        <label class="form-check-label" for="customCheck2">Remember me</label>
                                                    </div>
                                                </div>
                                            </div> */}
                                            <div class="col-sm-9 offset-sm-5">
                                                <button type="reset" class="btn btn-primary me-1">Submit</button>
                                                {/* <button type="reset" class="btn btn-outline-secondary">Reset</button> */}
                                            </div>
                                        </div>
                                    </form>
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

export default CreateJackpot