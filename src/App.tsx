import React from 'react';
import logo from './logo.svg';
import './App.css';
import WaterChart from './components/dashboard/WaterChart';
import Weather from './components/dashboard/Weather';

function App() {
  return (
    <div className="be-wrapper be-nosidebar-left">
    <nav className="navbar navbar-default navbar-fixed-top be-top-header">
      <div className="container-fluid">
        <div className="navbar-header"><a href="index.html" className="navbar-brand" /></div>
        <div className="be-right-navbar">
          <ul className="nav navbar-nav navbar-right be-user-nav">
            <li className="dropdown"><a href="#" data-toggle="dropdown" role="button" aria-expanded="false" className="dropdown-toggle"><img src="assets/img/avatar.png" alt="Avatar" /><span className="user-name">Túpac Amaru</span></a>
              <ul role="menu" className="dropdown-menu">
                <li>
                  <div className="user-info">
                    <div className="user-name">Túpac Amaru</div>
                    <div className="user-position online">Available</div>
                  </div>
                </li>
                <li><a href="#"><span className="icon mdi mdi-face" /> Account</a></li>
                <li><a href="#"><span className="icon mdi mdi-settings" /> Settings</a></li>
                <li><a href="#"><span className="icon mdi mdi-power" /> Logout</a></li>
              </ul>
            </li>
          </ul>
          <div className="page-title"><span>Dashboard</span></div>
          <ul className="nav navbar-nav navbar-right be-icons-nav">
            <li className="dropdown"><a href="#" role="button" aria-expanded="false" className="be-toggle-right-sidebar"><span className="icon mdi mdi-settings" /></a></li>
            <li className="dropdown"><a href="#" data-toggle="dropdown" role="button" aria-expanded="false" className="dropdown-toggle"><span className="icon mdi mdi-notifications" /><span className="indicator" /></a>
              <ul className="dropdown-menu be-notifications">
                <li>
                  <div className="title">Notifications<span className="badge">3</span></div>
                  <div className="list">
                    <div className="be-scroller">
                      <div className="content">
                        <ul>
                          <li className="notification notification-unread"><a href="#">
                              <div className="image"><img src="assets/img/avatar2.png" alt="Avatar" /></div>
                              <div className="notification-info">
                                <div className="text"><span className="user-name">Jessica Caruso</span> accepted your invitation to join the team.</div><span className="date">2 min ago</span>
                              </div></a></li>
                          <li className="notification"><a href="#">
                              <div className="image"><img src="assets/img/avatar3.png" alt="Avatar" /></div>
                              <div className="notification-info">
                                <div className="text"><span className="user-name">Joel King</span> is now following you</div><span className="date">2 days ago</span>
                              </div></a></li>
                          <li className="notification"><a href="#">
                              <div className="image"><img src="assets/img/avatar4.png" alt="Avatar" /></div>
                              <div className="notification-info">
                                <div className="text"><span className="user-name">John Doe</span> is watching your main repository</div><span className="date">2 days ago</span>
                              </div></a></li>
                          <li className="notification"><a href="#">
                              <div className="image"><img src="assets/img/avatar5.png" alt="Avatar" /></div>
                              <div className="notification-info"><span className="text"><span className="user-name">Emily Carter</span> is now following you</span><span className="date">5 days ago</span></div></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="footer"> <a href="#">View all notifications</a></div>
                </li>
              </ul>
            </li>
            <li className="dropdown"><a href="#" data-toggle="dropdown" role="button" aria-expanded="false" className="dropdown-toggle"><span className="icon mdi mdi-apps" /></a>
              <ul className="dropdown-menu be-connections">
                <li>
                  <div className="list">
                    <div className="content">
                      <div className="row">
                        <div className="col-xs-4"><a href="#" className="connection-item"><img src="assets/img/github.png" alt="Github" /><span>GitHub</span></a></div>
                        <div className="col-xs-4"><a href="#" className="connection-item"><img src="assets/img/bitbucket.png" alt="Bitbucket" /><span>Bitbucket</span></a></div>
                        <div className="col-xs-4"><a href="#" className="connection-item"><img src="assets/img/slack.png" alt="Slack" /><span>Slack</span></a></div>
                      </div>
                      <div className="row">
                        <div className="col-xs-4"><a href="#" className="connection-item"><img src="assets/img/dribbble.png" alt="Dribbble" /><span>Dribbble</span></a></div>
                        <div className="col-xs-4"><a href="#" className="connection-item"><img src="assets/img/mail_chimp.png" alt="Mail Chimp" /><span>Mail Chimp</span></a></div>
                        <div className="col-xs-4"><a href="#" className="connection-item"><img src="assets/img/dropbox.png" alt="Dropbox" /><span>Dropbox</span></a></div>
                      </div>
                    </div>
                  </div>
                  <div className="footer"> <a href="#">More</a></div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="be-content">
      <div className="main-content container-fluid">
        <div className="row">
          <div className="col-xs-12 col-md-6 col-lg-3">
            <div className="widget widget-tile">
              <div id="spark1" className="chart sparkline" />
              <div className="data-info">
                <div className="desc"></div>
                <div className="value"><span className="indicator indicator-equal mdi mdi-chevron-right" /><span data-toggle="counter" data-end={113} className="number">0</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-3">
            <div className="widget widget-tile">
              <div id="spark2" className="chart sparkline" />
              <div className="data-info">
                <div className="desc"></div>
                <div className="value"><span className="indicator indicator-positive mdi mdi-chevron-up" /><span data-toggle="counter" data-end={80} data-suffix="%" className="number">0</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-3">
            <div className="widget widget-tile">
              <div id="spark3" className="chart sparkline" />
              <div className="data-info">
                <div className="desc">Impressions</div>
                <div className="value"><span className="indicator indicator-positive mdi mdi-chevron-up" /><span data-toggle="counter" data-end={532} className="number">0</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-3">
            <div className="widget widget-tile">
              <div id="spark4" className="chart sparkline" />
              <div className="data-info">
                <div className="desc">Downloads</div>
                <div className="value"><span className="indicator indicator-negative mdi mdi-chevron-down" /><span data-toggle="counter" data-end={113} className="number">0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <WaterChart />
          </div>
          <div className="col-md-4">
            <Weather />
          </div>
        </div>
      </div>
    </div>
    <nav className="be-right-sidebar">
      <div className="sb-content">
        <div className="tab-navigation">
          <ul role="tablist" className="nav nav-tabs nav-justified">
            <li role="presentation" className="active"><a href="#tab1" aria-controls="tab1" role="tab" data-toggle="tab">Chat</a></li>
            <li role="presentation"><a href="#tab2" aria-controls="tab2" role="tab" data-toggle="tab">Todo</a></li>
            <li role="presentation"><a href="#tab3" aria-controls="tab3" role="tab" data-toggle="tab">Settings</a></li>
          </ul>
        </div>
        <div className="tab-panel">
          <div className="tab-content">
            <div id="tab1" role="tabpanel" className="tab-pane tab-chat active">
              <div className="chat-contacts">
                <div className="chat-sections">
                  <div className="be-scroller">
                    <div className="content">
                      <h2>Recent</h2>
                      <div className="contact-list contact-list-recent">
                        <div className="user"><a href="#"><img src="assets/img/avatar1.png" alt="Avatar" />
                            <div className="user-data"><span className="status away" /><span className="name">Claire Sassu</span><span className="message">Can you share the...</span></div></a></div>
                        <div className="user"><a href="#"><img src="assets/img/avatar2.png" alt="Avatar" />
                            <div className="user-data"><span className="status" /><span className="name">Maggie jackson</span><span className="message">I confirmed the info.</span></div></a></div>
                        <div className="user"><a href="#"><img src="assets/img/avatar3.png" alt="Avatar" />
                            <div className="user-data"><span className="status offline" /><span className="name">Joel King		</span><span className="message">Ready for the meeti...</span></div></a></div>
                      </div>
                      <h2>Contacts</h2>
                      <div className="contact-list">
                        <div className="user"><a href="#"><img src="assets/img/avatar4.png" alt="Avatar" />
                            <div className="user-data2"><span className="status" /><span className="name">Mike Bolthort</span></div></a></div>
                        <div className="user"><a href="#"><img src="assets/img/avatar5.png" alt="Avatar" />
                            <div className="user-data2"><span className="status" /><span className="name">Maggie jackson</span></div></a></div>
                        <div className="user"><a href="#"><img src="assets/img/avatar6.png" alt="Avatar" />
                            <div className="user-data2"><span className="status offline" /><span className="name">Jhon Voltemar</span></div></a></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bottom-input">
                  <input type="text" placeholder="Search..." name="q" /><span className="mdi mdi-search" />
                </div>
              </div>
              <div className="chat-window">
                <div className="title">
                  <div className="user"><img src="assets/img/avatar2.png" alt="Avatar" />
                    <h2>Maggie jackson</h2><span>Active 1h ago</span>
                  </div><span className="icon return mdi mdi-chevron-left" />
                </div>
                <div className="chat-messages">
                  <div className="be-scroller">
                    <div className="content">
                      <ul>
                        <li className="friend">
                          <div className="msg">Hello</div>
                        </li>
                        <li className="self">
                          <div className="msg">Hi, how are you?</div>
                        </li>
                        <li className="friend">
                          <div className="msg">Good, I'll need support with my pc</div>
                        </li>
                        <li className="self">
                          <div className="msg">Sure, just tell me what is going on with your computer?</div>
                        </li>
                        <li className="friend">
                          <div className="msg">I don't know it just turns off suddenly</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="chat-input">
                  <div className="input-wrapper"><span className="photo mdi mdi-camera" />
                    <input type="text" placeholder="Message..." name="q" autoComplete="off" /><span className="send-msg mdi mdi-mail-send" />
                  </div>
                </div>
              </div>
            </div>
            <div id="tab2" role="tabpanel" className="tab-pane tab-todo">
              <div className="todo-container">
                <div className="todo-wrapper">
                  <div className="be-scroller">
                    <div className="todo-content"><span className="category-title">Today</span>
                      <ul className="todo-list">
                        <li>
                          <div className="be-checkbox be-checkbox-sm"><span className="delete mdi mdi-delete" />
                            <input id="todo1" type="checkbox" defaultChecked />
                            <label htmlFor="todo1">Initialize the project</label>
                          </div>
                        </li>
                        <li>
                          <div className="be-checkbox be-checkbox-sm"><span className="delete mdi mdi-delete" />
                            <input id="todo2" type="checkbox" />
                            <label htmlFor="todo2">Create the main structure</label>
                          </div>
                        </li>
                        <li>
                          <div className="be-checkbox be-checkbox-sm"><span className="delete mdi mdi-delete" />
                            <input id="todo3" type="checkbox" />
                            <label htmlFor="todo3">Updates changes to GitHub</label>
                          </div>
                        </li>
                      </ul><span className="category-title">Tomorrow</span>
                      <ul className="todo-list">
                        <li>
                          <div className="be-checkbox be-checkbox-sm"><span className="delete mdi mdi-delete" />
                            <input id="todo4" type="checkbox" />
                            <label htmlFor="todo4">Initialize the project</label>
                          </div>
                        </li>
                        <li>
                          <div className="be-checkbox be-checkbox-sm"><span className="delete mdi mdi-delete" />
                            <input id="todo5" type="checkbox" />
                            <label htmlFor="todo5">Create the main structure</label>
                          </div>
                        </li>
                        <li>
                          <div className="be-checkbox be-checkbox-sm"><span className="delete mdi mdi-delete" />
                            <input id="todo6" type="checkbox" />
                            <label htmlFor="todo6">Updates changes to GitHub</label>
                          </div>
                        </li>
                        <li>
                          <div className="be-checkbox be-checkbox-sm"><span className="delete mdi mdi-delete" />
                            <input id="todo7" type="checkbox" />
                            <label htmlFor="todo7" title="This task is too long to be displayed in a normal space!">This task is too long to be displayed in a normal space!</label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bottom-input">
                  <input type="text" placeholder="Create new task..." name="q" /><span className="mdi mdi-plus" />
                </div>
              </div>
            </div>
            <div id="tab3" role="tabpanel" className="tab-pane tab-settings">
              <div className="settings-wrapper">
                <div className="be-scroller"><span className="category-title">General</span>
                  <ul className="settings-list">
                    <li>
                      <div className="switch-button switch-button-sm">
                        <input type="checkbox" defaultChecked name="st1" id="st1" /><span>
                          <label htmlFor="st1" /></span>
                      </div><span className="name">Available</span>
                    </li>
                    <li>
                      <div className="switch-button switch-button-sm">
                        <input type="checkbox" defaultChecked name="st2" id="st2" /><span>
                          <label htmlFor="st2" /></span>
                      </div><span className="name">Enable notifications</span>
                    </li>
                    <li>
                      <div className="switch-button switch-button-sm">
                        <input type="checkbox" defaultChecked name="st3" id="st3" /><span>
                          <label htmlFor="st3" /></span>
                      </div><span className="name">Login with Facebook</span>
                    </li>
                  </ul><span className="category-title">Notifications</span>
                  <ul className="settings-list">
                    <li>
                      <div className="switch-button switch-button-sm">
                        <input type="checkbox" name="st4" id="st4" /><span>
                          <label htmlFor="st4" /></span>
                      </div><span className="name">Email notifications</span>
                    </li>
                    <li>
                      <div className="switch-button switch-button-sm">
                        <input type="checkbox" defaultChecked name="st5" id="st5" /><span>
                          <label htmlFor="st5" /></span>
                      </div><span className="name">Project updates</span>
                    </li>
                    <li>
                      <div className="switch-button switch-button-sm">
                        <input type="checkbox" defaultChecked name="st6" id="st6" /><span>
                          <label htmlFor="st6" /></span>
                      </div><span className="name">New comments</span>
                    </li>
                    <li>
                      <div className="switch-button switch-button-sm">
                        <input type="checkbox" name="st7" id="st7" /><span>
                          <label htmlFor="st7" /></span>
                      </div><span className="name">Chat messages</span>
                    </li>
                  </ul><span className="category-title">Workflow</span>
                  <ul className="settings-list">
                    <li>
                      <div className="switch-button switch-button-sm">
                        <input type="checkbox" name="st8" id="st8" /><span>
                          <label htmlFor="st8" /></span>
                      </div><span className="name">Deploy on commit</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
  );
}

export default App;
