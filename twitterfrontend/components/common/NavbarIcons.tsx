import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailIcon from "@mui/icons-material/Mail";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ArticleIcon from "@mui/icons-material/Article";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export const navbarIcons: { Icon: typeof HomeIcon; TextDescription: string }[] = [
    { Icon: HomeIcon, TextDescription: "Home" },
    { Icon: TagIcon, TextDescription: "Explore" },
    { Icon: NotificationsNoneIcon, TextDescription: "Notifications" },
    { Icon: MailIcon, TextDescription: "Messages" },
    { Icon: BookmarkIcon, TextDescription: "Bookmarks" },
    { Icon: ArticleIcon, TextDescription: "Lists" },
    { Icon: PermIdentityOutlinedIcon, TextDescription: "Profiles" },
    { Icon: MoreHorizIcon, TextDescription: "More" },
  ];