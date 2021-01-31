var yo = require('yo-yo');
var landing = require('../landing');

var signinForm = yo`<div class="col s12 m7">
                        <div class="row">
                            <div class="signup-box">
                                <h1 class="photogram">Photogram</h1>
                                <form action="" class="signup-form">
                                    <div class="section">
                                        <a href="" class="btn btn-fb hide-on-small-only">
                                         <i class="fab fa-facebook-square"></i> Log in with Facebook
                                        </a>
                                        <a href="" class="btn btn-fb hide-on-med-and-up">
                                            <i class="fab fa-facebook-square"></i> Log in with Facebook
                                        </a>
                                    </div>
                                    <div class="divider"></div>
                                    <div class="section">
                                        <input type="text" name="username" placeholder="Username">
                                        <input type="password" name="password" placeholder="Password">
                                        <button class="btn waves-effect waves-light btn-signup">Log in</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="row">
                            <div class="login-box">
                                Dont have an account?
                                <a href="/signup">Sign up</a>
                            </div>
                        </div>
                    </div>`;
module.exports = landing(signinForm)