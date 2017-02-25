<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>学IT - 后台管理系统</title>
    <link rel="stylesheet" href="./assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="./assets/font-awesome/css/font-awesome.css">
    <link rel="stylesheet" href="./assets/nprogress/nprogress.css">
    <link rel="stylesheet" href="./less/index.css">
</head>
<body>
    <!-- 侧边栏 -->
    <div class="aside">
        <!-- 个人资料 -->
        <div class="profile">
            <!-- 头像 -->
            <div class="avatar img-circle">
                <img src="./uploads/avatar.jpg">
            </div>
            <h4>布头儿</h4>
        </div>
        <!-- 导航菜单 -->
        <div class="navs">
            <ul class="list-unstyled">
                <li>
                    <a href="../../index.html">
                        <i class="fa fa-home"></i>
                        仪表盘
                    </a>
                </li>
                <li>
                    <a href="./user_list.html">
                        <i class="fa fa-bell"></i>
                        用户管理
                    </a>
                </li>
                <li>
                    <a href="./teacher_list.html">
                        <i class="fa fa-bell"></i>
                        讲师管理
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <i class="fa fa-cog"></i>
                        课程管理
                        <i class="arrow fa fa-angle-right"></i>
                    </a>
                    <ul class="list-unstyled" style="display: block;">
                        <li>
                            <a href="course_add.js">
                                 课程添加
                            </a>
                        </li>
                        <li>
                            <a href="./course_list.html" class="active">
                                课程列表
                            </a>
                        </li>
                        <li>
                            <a href="category.js">
                                课程分类
                            </a>
                        </li>
                        <li>
                            <a href="course_topic.html">
                                课程专题
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="../advert_list.html">
                        <i class="fa fa-bell"></i>
                        广告管理
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <i class="fa fa-cog"></i>
                        系统设置
                        <i class="arrow fa fa-angle-right"></i>
                    </a>
                    <ul class="list-unstyled">
                        <li>
                            <a href="javascript:;">
                                网站设置
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                 权限管理
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
    <!-- 主体 -->
    <div class="main">
        <div class="container-fluid">
            <!-- 头部 -->
            <div class="header">
                <nav class="navbar navbar-custom">
                    <div class="navbar-header">
                        <a href="javascript:;" class="navbar-brand">
                            <i class="fa fa-navicon"></i>
                        </a>
                    </div>
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                            <a href="javascript:;">
                                <i class="fa fa-bell"></i>
                                <span class="badge">8</span>
                            </a>
                        </li>
                        <li>
                            <a href="../home/settings.html">
                                <i class="fa fa-user"></i>
                                个人中心
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <i class="fa fa-sign-out"></i>
                                退出
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <i class="fa fa-tasks"></i>
                            </a>
                        </li>
                    </ul>
                </nav>          
            </div>
            <!-- 客户列表 -->
            <div class="body course-list">
                <!-- 面包屑 -->
                <ol class="breadcrumb">
                    <li><a href="javascript:;">课程管理</a></li>
                    <li class="active">课程列表</li>
                </ol>
                <div class="courses">
                    <!-- 搜索 -->
                    <div class="search">
                        <form action="" class="form-inline">
                            <select name="" class="form-control input-sm">
                                <option value="">按年龄</option>
                            </select>
                            <select name="" class="form-control input-sm">
                                <option value="">按性别</option>
                            </select>
                            <select name="" class="form-control input-sm">
                                <option value="">按地区</option>
                            </select>
                            <select name="" class="form-control input-sm">
                                <option value="">按日期</option>
                            </select>
                            <button class="btn btn-success btn-sm">筛选</button>
                            <div class="input-group pull-right">
                                <input type="text" class="form-control input-sm">
                                <span class="input-group-btn">
                                    <button class="btn btn-success btn-sm">搜索</button>
                                </span>
                            </div>
                        </form>
                    </div>
                    <div class="course">
                        <div class="pic">
                            <img src="./uploads/course_1.jpg" alt="">
                        </div>
                        <div class="info">
                            <a href="javascript:;">html,div+css视频教程(2014最新,带多个企业级项目实战)</a>
                            <ul class="list-unstyled">
                                <li>
                                    <span>讲师：李鹏周</span>
                                    <span>类别：前端开发</span>
                                </li>
                                <li>
                                    <span>课时：32</span>
                                    <span>学员：9823</span>
                                </li>
                                <li>
                                    <span>浏览：11313</span>
                                    <span></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="course">
                        <div class="pic">
                            <img src="./uploads/course_2.jpg" alt="">
                        </div>
                        <div class="info">
                            <a href="javascript:;">JavaScript 基础</a>
                            <ul class="list-unstyled">
                                <li>
                                    <span>讲师：李鹏周</span>
                                    <span>类别：前端开发</span>
                                </li>
                                <li>
                                    <span>课时：32</span>
                                    <span>学员：9823</span>
                                </li>
                                <li>
                                    <span>浏览：11313</span>
                                    <span></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="course">
                        <div class="pic">
                            <img src="./uploads/course_3.jpg" alt="">
                        </div>
                        <div class="info">
                            <a href="javascript:;">App开发从0到1</a>
                            <ul class="list-unstyled">
                                <li>
                                    <span>讲师：李鹏周</span>
                                    <span>类别：前端开发</span>
                                </li>
                                <li>
                                    <span>课时：32</span>
                                    <span>学员：9823</span>
                                </li>
                                <li>
                                    <span>浏览：11313</span>
                                    <span></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="course">
                        <div class="pic">
                            <img src="./uploads/course_4.jpg" alt="">
                        </div>
                        <div class="info">
                            <a href="javascript:;">Java 从入门到精通</a>
                            <ul class="list-unstyled">
                                <li>
                                    <span>讲师：李鹏周</span>
                                    <span>类别：前端开发</span>
                                </li>
                                <li>
                                    <span>课时：32</span>
                                    <span>学员：9823</span>
                                </li>
                                <li>
                                    <span>浏览：11313</span>
                                    <span></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="course">
                        <div class="pic">
                            <img src="./uploads/course_1.jpg" alt="">
                        </div>
                        <div class="info">
                            <a href="javascript:;">html,div+css视频教程(2014最新,带多个企业级项目实战)</a>
                            <ul class="list-unstyled">
                                <li>
                                    <span>讲师：李鹏周</span>
                                    <span>类别：前端开发</span>
                                </li>
                                <li>
                                    <span>课时：32</span>
                                    <span>学员：9823</span>
                                </li>
                                <li>
                                    <span>浏览：11313</span>
                                    <span></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="course">
                        <div class="pic">
                            <img src="./uploads/course_3.jpg" alt="">
                        </div>
                        <div class="info">
                            <a href="javascript:;">App开发从0到1</a>
                            <ul class="list-unstyled">
                                <li>
                                    <span>讲师：李鹏周</span>
                                    <span>类别：前端开发</span>
                                </li>
                                <li>
                                    <span>课时：32</span>
                                    <span>学员：9823</span>
                                </li>
                                <li>
                                    <span>浏览：11313</span>
                                    <span></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- 分页 -->
                <ul class="pagination pull-right">
                    <li><a href="#">上一页</a></li>
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li><a href="#">下一页</a></li>
                </ul>
            </div>
        </div>
    </div>

    <script src="./assets/jquery/jquery.min.js"></script>
    <script src="./assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="./assets/nprogress/nprogress.js"></script>
    <script src="./js/common.js"></script>
</body>
</html>