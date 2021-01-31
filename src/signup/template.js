var yo = require('yo-yo');
var landing = require('../landing');

var signupForm = yo`<div class="col s12 m7">
                        <div class="row">
                            <div class="signup-box">
                                <h1 class="photogram">Photogram</h1>
                                <form action="" class="signup-form">
                                    <h2>Sign up and share your favorite moments with friends</h2>
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
                                        <input type="email" name="email" placeholder="Email">
                                        <input type="text" name="name" placeholder="Full Name">
                                        <input type="text" name="username" placeholder="Username">
                                        <input type="password" name="password" placeholder="Password">
                                        <button class="btn waves-effect waves-light btn-signup">Sign up</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="row">
                            <div class="login-box">
                                Have an account?
                                <a href="/signin">Log in</a>
                            </div>
                        </div>
                    </div>`;
module.exports = landing(signupForm)