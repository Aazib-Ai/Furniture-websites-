import React from 'react';
import * as LucideIcons from 'lucide-react';

export type IconName = keyof typeof LucideIcons;

interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  className?: string;
  strokeWidth?: number;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = 'currentColor',
  className = '',
  strokeWidth = 2,
}) => {
  const IconComponent = LucideIcons[name] as React.FC<LucideIcons.LucideProps>;
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in Lucide`);
    return null;
  }

  return (
    <IconComponent
      size={size}
      color={color}
      className={className}
      strokeWidth={strokeWidth}
    />
  );
};

// Export commonly used icons for convenience
export const {
  Home,
  Search,
  ShoppingCart,
  User,
  Heart,
  Star,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  Check,
  CheckCircle,
  AlertCircle,
  Info,
  Mail,
  Phone,
  MapPin,
  Clock,
  Calendar,
  Filter,
  Grid,
  List,
  Eye,
  EyeOff,
  Settings,
  LogOut,
  CreditCard,
  Package,
  Truck,
  Shield,
  Award,
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart,
  Users,
  MessageCircle,
  Share2,
  Download,
  Upload,
  Edit,
  Trash2,
  RefreshCw,
  ExternalLink,
  Link,
  Copy,
  Save,
  Printer,
  FileText,
  Image,
  Video,
  Camera,
  Sun,
  Moon,
  Cloud,
  Zap,
  Wind,
  Droplets,
  Thermometer,
  Globe,
  Wifi,
  Bluetooth,
  Battery,
  Power,
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  Headphones,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Database,
  CloudUpload,
  CloudDownload,
  Activity,
  DollarSign,
  Wallet,
  Car,
  Bus,
  Train,
  Plane,
  Send,
  Inbox,
  Archive,
  ThumbsUp,
  ThumbsDown,
  Smile,
  Frown,
  UserPlus,
  UserMinus,
  UserCheck,
  UserX,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Rewind,
  FastForward,
  Volume1,
  Volume,
  Watch,
  Timer,
  Bell,
  BellOff,
  Flag,
  Bookmark,
  Lightbulb,
  CloudRain,
  CloudSnow,
  Umbrella,
  Snowflake,
  Flame,
  Sparkles,
  Trophy,
  Crown,
  Gem,
  Gift,
  Wand2,
} = LucideIcons;

export default Icon;