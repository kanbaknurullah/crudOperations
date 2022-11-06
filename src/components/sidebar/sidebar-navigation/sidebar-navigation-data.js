import home from '../../../assets/images/home.png';
import course from '../../../assets/images/course.png';
import students from '../../../assets/images/students.png';
import payment from '../../../assets/images/payment.png';
import report from '../../../assets/images/report.png';
import settings from '../../../assets/images/settings.png';

export const SidebarNavigationData = [
    {
        title: "Home",
        icon: home,
        path: "/",
        imageClassName: "homeImage",
        textClassName: "homeText"
    },
    {
        title: "Course",
        icon: course,
        path: "/course",
        imageClassName: "courseImage",
        textClassName: "courseText"
    },
    {
        title: "Students",
        icon: students,
        path: "/students",
        imageClassName: "studentsImage",
        textClassName: "studentsText"
    },
    {
        title: "Payment",
        icon: payment,
        path: "/payment",
        imageClassName: "paymentImage",
        textClassName: "paymentText"
    },
    {
        title: "Report",
        icon: report,
        path: "/report",
        imageClassName: "reportImage",
        textClassName: "reportText"
    },
    {
        title: "Settings",
        icon: settings,
        path: "/settings",
        imageClassName: "settingsImage",
        textClassName: "settingsText"
    }
]