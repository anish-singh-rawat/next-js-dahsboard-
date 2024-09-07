import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ApprovalIcon from '@mui/icons-material/Approval';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import AddTaskIcon from '@mui/icons-material/AddTask';
import DescriptionIcon from '@mui/icons-material/Description';
import SettingsIcon from '@mui/icons-material/Settings';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { deleteCookie } from 'cookies-next';

export const allFilesData = [
  { fileName: 'Profile', icon: <AccountCircleIcon />, path: '/dashboard/userProfile' },

  { fileName: 'All Users', icon: <StackedBarChartIcon />, path: '/dashboard/AllUsers' },
  
  { fileName: 'Add User', icon: <PersonAddAltIcon />, path: '/dashboard/AddUser' },

  { fileName: 'All files', icon: <ApprovalIcon />, path: '/dashboard/AllFiles' },

  { fileName: 'Calendar', icon: <CalendarMonthIcon />, path: '/dashboard/Calendar' },

  { fileName: 'upload Documents', icon: <AccessibilityNewIcon />, path: '/dashboard/Documents' },

  { fileName: 'Monthly Task', icon: <AssignmentLateIcon />, path: '/dashboard/monthlyTask' },

  { fileName: 'Personal Notes', icon: <DescriptionIcon />, path: '/dashboard/personalNotes' },

  { fileName: 'Settings', icon: <SettingsIcon />, path: '/dashboard/settings' },

  
  { fileName: 'Completed Task', icon: <AddTaskIcon />, path: '/dashboard/CompletedTask' },

  { fileName: 'LogOut', icon: <PowerSettingsNewIcon
   onClick={()=> deleteCookie('logged')} 
  />, path: '/' },
]