# Products Page - Visual Guide & Structure

## Page Layout Overview

```
┌─────────────────────────────────────────────────────────┐
│              HERO SECTION - Page Title                   │
│    "Our Product Categories"                              │
│    Complete solutions for material handling...           │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  STICKY NAVIGATION TABS (stays at top when scrolling)    │
│  ┌──────────────────┬────────────────────┬────────────────┐
│  │Material Handling │ System Integration │ Belting        │
│  │    Systems       │    & Automation    │ Solutions      │
│  └──────────────────┴────────────────────┴────────────────┘
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│         MAIN CONTENT SECTION (Dynamic)                   │
│                                                          │
│  [Based on selected category]                           │
│                                                          │
│  ┌─────────────────────────────────────────────────────┐│
│  │ 1. CATEGORY TITLE & DESCRIPTION                     ││
│  │    [e.g., "1. Material Handling Systems"]            ││
│  └─────────────────────────────────────────────────────┘│
│                                                          │
│  ┌─────────────────────────────────────────────────────┐│
│  │ 2. SUBCATEGORY CARD (Expandable)                    ││
│  │    ┌─────────────────────────────────────────────┐  ││
│  │    │ 1.1 Belt Conveyors ▼ (Click to expand)     │  ││
│  │    │ Description: Horizontal to inclined...      │  ││
│  │    └─────────────────────────────────────────────┘  ││
│  │                                                      ││
│  │    ┌─ EXPANDED VIEW (Grid of Products) ─┐          ││
│  │    │                                     │          ││
│  │    │  ┌────────────┐ ┌────────────┐     │          ││
│  │    │  │  Product   │ │  Product   │     │          ││
│  │    │  │   Card 1   │ │   Card 2   │ ... │          ││
│  │    │  │            │ │            │     │          ││
│  │    │  │ [Image]    │ │ [Image]    │     │          ││
│  │    │  │ Name       │ │ Name       │     │          ││
│  │    │  │ Features   │ │ Features   │     │          ││
│  │    │  │ Specs      │ │ Specs      │     │          ││
│  │    │  │ Button     │ │ Button     │     │          ││
│  │    │  └────────────┘ └────────────┘     │          ││
│  │    │                                     │          ││
│  │    └─────────────────────────────────────┘          ││
│  └─────────────────────────────────────────────────────┘│
│                                                          │
│  [More subcategories follow same pattern...]            │
│                                                          │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│         CALL-TO-ACTION SECTION                           │
│    "Need a Custom Solution?"                             │
│    [Contact Our Experts Button]                          │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│         INFO SECTION - Company Highlights                │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐   │
│  │   🏭        │  │   🛡️        │  │   🚀        │   │
│  │ In-House    │  │ Quality      │  │ Innovation  │   │
│  │ Production  │  │ Assured      │  │ Driven      │   │
│  └──────────────┘  └──────────────┘  └──────────────┘   │
└─────────────────────────────────────────────────────────┘
```

## Product Card Structure

```
┌──────────────────────────────────────────┐
│           PRODUCT IMAGE AREA              │
│   [56px height with overlay gradient]     │
│   [Product name overlay at bottom]        │
│                                          │
└──────────────────────────────────────────┘
│  Product Name (Large Bold)               │
│                                          │
│  Product Description (2 lines max)       │
│                                          │
│  ┌────────────────────────────────────┐ │
│  │ 💡 Features: Best for X industry   │ │
│  └────────────────────────────────────┘ │
│                                          │
│  Key Features:                           │
│  ✓ Feature 1                             │
│  ✓ Feature 2                             │
│  ✓ Feature 3                             │
│  +2 more                                 │
│                                          │
│  [For Belting: Technical Data Table]     │
│  Belt Thickness: 0.8mm - 3mm             │
│  Width Range: 300mm - 2000mm             │
│  Tensile Strength: 50-100 N/mm           │
│                                          │
│  ┌────────────────────────────────────┐ │
│  │         [View Details Button]       │ │
│  └────────────────────────────────────┘ │
└──────────────────────────────────────────┘
```

## Responsive Breakpoints

### Mobile (< 768px)
- Single column layout
- Full-width cards
- Simplified navigation
- Touch-friendly buttons
- Larger text for readability

### Tablet (768px - 1024px)
- 2-column grid for products
- Adjusted spacing
- Horizontal scroll navigation
- Medium-size cards

### Desktop (> 1024px)
- 3-column grid for products
- Optimal spacing
- Full horizontal navigation
- Large hover effects
- Enhanced animations

## Interactive Features

### 1. Category Tabs (Main Navigation)
- Sticky position at top (top: 80px)
- Color underline on active tab
- Smooth transitions between views
- Mobile-friendly with wrap

### 2. Subcategory Expansion
- Click header to expand/collapse
- ChevronDown icon rotates 180°
- Smooth slide down animation
- Visual feedback on hover

### 3. Product Cards
- Hover: Shadow increases (shadow-lg → shadow-2xl)
- Image: Scale up 10% on hover (1 → 1.1)
- Smooth 300-500ms transitions
- Button color change on hover

### 4. Dynamic Content
- Material Handling: Blue color scheme
- Automation: Icon-based imagery
- Belting: Purple color scheme
- Empty state: Placeholder icons

## Data Organization

```
materialHandlingProducts = {
  'belt-conveyors': {
    title: '1.1 Belt Conveyors',
    description: '...',
    products: [
      { id, name, image, description, specs, features },
      { ... }
    ]
  },
  'roller-conveyors': { ... },
  'flexible-conveyors': { ... },
  'modular-conveyors': { ... },
  'other-systems': { ... }
}

automationProducts = [
  { id, name, image, description, specs, features },
  { ... }
]

beltingSolutions = {
  'pu-belts': {
    title: '3.1 PUC/PU/PE Conveyor Belts',
    products: [
      { id, name, description, specs, technicalData, features },
      { ... }
    ]
  },
  'plastic-modular': { ... },
  'specialty-belts': { ... }
}
```

## CSS Classes Applied

### Layout Classes
- `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3` - Responsive grid
- `space-y-16` - Vertical spacing between sections
- `gap-8` - Gap between grid items

### Color Classes
- Material Handling: `bg-blue-100`, `text-blue-900`, `border-blue-600`
- Automation: `bg-gradient-to-br from-blue-400 to-blue-600`
- Belting: `bg-purple-100`, `text-purple-900`, `border-purple-600`

### Effects Classes
- Shadows: `shadow-lg`, `hover:shadow-2xl`
- Transitions: `transition-all duration-300`, `duration-500`
- Transforms: `hover:scale-110`, `rotate-180`

### Typography
- Headings: `text-4xl font-bold` (main), `text-2xl font-bold` (sub)
- Subheadings: `text-lg`, `text-xl`
- Body: `text-sm text-gray-600`
- Labels: `text-xs font-semibold`

## State Management

```javascript
const [expandedCategory, setExpandedCategory] = useState('material-handling');
// Tracks which main category is displayed

const [expandedSubcategory, setExpandedSubcategory] = useState(null);
// Tracks which subcategory is expanded (null = all collapsed)
```

## Image Handling

### Category 1: Material Handling
- Real images from `/assets` folder
- 40+ conveyor system photos
- Professional product photography

### Category 2: Automation
- Placeholder gradients with emoji icons
- Consistent styling with color scheme
- Easy to replace with real images

### Category 3: Belting Solutions
- Mix of real images and placeholders
- Technical data display
- Scalable image structure

## Navigation Flow

```
1. User lands on Products page
   ↓
2. Sees 3 main category tabs (Material Handling selected by default)
   ↓
3. Can switch between categories via tabs
   ↓
4. Within each category, sees multiple subcategory cards
   ↓
5. Click subcategory header to expand/collapse
   ↓
6. See product grid with 3 columns (desktop)
   ↓
7. Hover over product for more details/effects
   ↓
8. Click "View Details" or "Specifications" button
   ↓
9. Scroll to CTA section ("Need a Custom Solution?")
   ↓
10. Click "Contact Our Experts" to go to contact page
```

## Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox support required
- Tailwind CSS v3+
- React 16.8+ (hooks support)

## Performance Considerations
- Images optimized for web
- CSS classes pre-compiled by Tailwind
- Minimal JavaScript (state updates only)
- Smooth animations at 60fps
- Lazy loading ready (can be added)

## Accessibility Features
- Semantic HTML structure
- ARIA labels on buttons
- Color contrast compliance
- Keyboard navigation support
- Alt text on images
