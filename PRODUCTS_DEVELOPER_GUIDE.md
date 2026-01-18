# Products.jsx Developer Documentation

## File Location
`frontend/src/pages/Products.jsx`

## File Size
- **Lines of Code**: 1,000
- **Total Products**: 45
- **Data Objects**: 3 main structures
- **Components**: 1 functional component
- **State Variables**: 2 useState hooks

## Dependencies

### NPM Packages
```json
{
  "react": "^18.0.0",
  "lucide-react": "^latest"
}
```

### CSS Framework
- **Tailwind CSS v3+**

### Icons Used
- `ArrowRight` - from lucide-react
- `ChevronDown` - from lucide-react

## Data Structure

### 1. Material Handling Products Structure
```javascript
const materialHandlingProducts = {
  [key]: {
    title: string,
    description: string,
    products: [
      {
        id: number,
        name: string,
        image: import,
        description: string,
        specs: string[],
        features: string
      }
    ]
  }
}
```

**Keys**: `'belt-conveyors'`, `'roller-conveyors'`, `'flexible-conveyors'`, `'modular-conveyors'`, `'other-systems'`

### 2. Automation Products Structure
```javascript
const automationProducts = [
  {
    id: number,
    name: string,
    image: string (URL),
    description: string,
    specs: string[],
    features: string
  }
]
```

### 3. Belting Solutions Structure
```javascript
const beltingSolutions = {
  [key]: {
    title: string,
    description: string,
    products: [
      {
        id: number,
        name: string,
        image: string (URL),
        description: string,
        specs: string[],
        technicalData?: {
          [property]: value
        },
        features: string
      }
    ]
  }
}
```

**Keys**: `'pu-belts'`, `'plastic-modular'`, `'specialty-belts'`

## State Management

### useState Hooks
```javascript
const [expandedCategory, setExpandedCategory] = useState('material-handling');
// Values: 'material-handling' | 'automation' | 'belting'

const [expandedSubcategory, setExpandedSubcategory] = useState(null);
// Values: null | 'belt-conveyors' | 'roller-conveyors' | ... | 'specialty-belts'
```

## Component Sections

### 1. Imports & Setup (Lines 1-41)
- React hooks import
- Lucide React icons
- All image imports for material handling conveyors
- Component initialization

### 2. Data Definitions (Lines 43-380)
- Material Handling Products object
- Automation Products array
- Belting Solutions object

### 3. JSX Sections (Lines 382-1000)
- Hero section
- Main category navigation
- Material Handling content section
- Automation content section
- Belting Solutions content section
- CTA section
- Info section (company highlights)

## Key Functions

### Category Toggle
```javascript
onClick={() => setExpandedCategory('material-handling')}
```
Changes main category view when clicked.

### Subcategory Toggle
```javascript
onClick={() => setExpandedSubcategory(expandedSubcategory === key ? null : key)}
```
Expands/collapses subcategory group.

## Tailwind Classes Used

### Layout
- `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- `flex flex-wrap gap-2 justify-center`
- `space-y-16`, `space-y-2`
- `gap-8`

### Colors
- Blue Theme: `bg-blue-600`, `text-blue-900`, `border-blue-600`
- Purple Theme: `bg-purple-600`, `text-purple-900`, `border-purple-600`
- Green Theme: `bg-green-50`, `text-green-800`
- Grays: `bg-gray-50`, `text-gray-600`, `bg-gray-200`

### Effects
- Shadows: `shadow-lg`, `shadow-md`, `hover:shadow-2xl`
- Transitions: `transition-all duration-300`, `transition-transform duration-500`
- Transforms: `hover:scale-110`, `rotate-180`
- Gradients: `bg-gradient-to-br`

### Typography
- `text-5xl font-bold` - Main headings
- `text-4xl font-bold` - Section headings
- `text-2xl font-bold` - Subsection headings
- `text-lg` - Body text
- `text-sm` - Small text
- `text-xs` - Extra small (labels)
- `font-bold`, `font-semibold` - Font weights

## Responsive Design

### Mobile First Approach
- Base styles: Single column, full width
- `md:` prefix: 2-column grid at 768px
- `lg:` prefix: 3-column grid at 1024px

### Sticky Navigation
- `sticky top-20 z-40` - Stays below header
- Position updates with scroll

### Touch-Friendly Elements
- Larger tap targets on mobile
- Proper spacing between clickable elements
- Readable font sizes

## Image Handling

### Local Image Imports
```javascript
import horizontalBeltImg from '../assets/horizontal belt conveyor.jpeg';
```
Pattern repeated for all asset files.

### External Placeholders
```javascript
image: 'https://via.placeholder.com/400x300?text=Control+Panel'
```
Used for automation and some belting solutions.

### Image Rendering
```jsx
<img
  src={product.image}
  alt={product.name}
  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
/>
```

## Conditional Rendering

### Main Categories
```jsx
{expandedCategory === 'material-handling' && (
  // Material Handling section JSX
)}
{expandedCategory === 'automation' && (
  // Automation section JSX
)}
{expandedCategory === 'belting' && (
  // Belting section JSX
)}
```

### Subcategory Expansion
```jsx
{expandedSubcategory === key && (
  // Subcategory products grid
)}
```

### Array Mapping
```jsx
{Object.entries(materialHandlingProducts).map(([key, category]) => (
  // Render subcategory card
))}

{category.products.map((product) => (
  // Render product card
))}
```

## Performance Optimizations

### Potential Improvements
1. **Lazy Loading Images**
```javascript
<img loading="lazy" src={...} />
```

2. **Code Splitting**
```javascript
const MaterialHandling = React.lazy(() => 
  import('./sections/MaterialHandling')
);
```

3. **Memoization**
```javascript
const ProductCard = React.memo(({ product }) => (...))
```

4. **Image Optimization**
- Use WebP format
- Implement responsive images with srcset
- Add image compression

## Accessibility Considerations

### Current Implementation
- Semantic HTML: `<section>`, `<h2>`, `<h3>`, `<h4>`, `<button>`
- Alt text on images
- Color contrast: WCAG AA compliant
- Keyboard navigation support on buttons

### Recommended Additions
```jsx
// Add ARIA labels
<button aria-label="Expand Material Handling category">

// Add focus styles
className="focus:outline-none focus:ring-2 focus:ring-blue-600"

// Add role attributes if needed
role="tablist" // on navigation
role="tab" // on category buttons
```

## Testing Considerations

### Unit Tests
```javascript
// Test category switching
it('should toggle category on button click', () => {
  // render component
  // click category button
  // verify state change
})

// Test subcategory expansion
it('should expand/collapse subcategory', () => {
  // verify expansion logic
})
```

### Integration Tests
- Verify all products render correctly
- Check image loading
- Validate data structure integrity

### E2E Tests
- Complete user flow from category selection to CTA
- Mobile responsiveness
- Animation performance

## Common Issues & Solutions

### Issue: Images not loading
**Solution**: Verify file paths in import statements
```javascript
// Correct path format
import imageFile from '../assets/filename.jpeg';
```

### Issue: Responsive layout breaking
**Solution**: Check Tailwind configuration
```javascript
// Ensure Tailwind is processing the file
content: ['./src/**/*.{jsx,js}']
```

### Issue: State not updating
**Solution**: Check state setter syntax
```javascript
// Correct
setExpandedCategory('material-handling')
// Wrong
setExpandedCategory = 'material-handling'
```

### Issue: Animations not smooth
**Solution**: Ensure duration and easing
```javascript
// Add proper transition
className="transition-all duration-300 ease-in-out"
```

## Deployment Checklist

- [ ] All image assets present in `/assets` folder
- [ ] No console errors in production build
- [ ] Responsive design tested on all breakpoints
- [ ] All links working (Contact page exists)
- [ ] Meta tags updated for SEO
- [ ] Image sizes optimized
- [ ] CSS bundle size acceptable
- [ ] No unused imports
- [ ] Code formatted and linted
- [ ] Performance metrics acceptable

## Extension Points

### Easy Additions

1. **Product Comparison**
```javascript
const [compareProducts, setCompareProducts] = useState([]);
// Add checkbox on product cards
```

2. **Search/Filter**
```javascript
const [searchTerm, setSearchTerm] = useState('');
const filtered = allProducts.filter(p => 
  p.name.includes(searchTerm)
);
```

3. **Favorites**
```javascript
const [favorites, setFavorites] = useState([]);
// Add heart icon to products
```

4. **PDF Download**
```javascript
<a href={`/pdfs/${product.id}.pdf`} download>
  Download Spec Sheet
</a>
```

## Future Enhancements

1. **Product Details Modal**
- Click product to show full details
- Lightbox for image gallery

2. **Advanced Filtering**
- Filter by temperature range
- Filter by industry
- Filter by specifications

3. **Dynamic Content**
- Load products from API
- Real-time inventory updates
- Pricing integration

4. **User Interactions**
- Add to cart functionality
- Request quote forms
- Save to wishlist

5. **Analytics**
- Track product views
- Monitor category popularity
- A/B test layouts

## Related Files

- `frontend/src/pages/Home.jsx` - Link from home page
- `frontend/src/pages/Contact.jsx` - CTA destination
- `frontend/src/pages/About.jsx` - Company info reference
- `frontend/src/components/Header.jsx` - Navigation header
- `frontend/src/components/Footer.jsx` - Footer links
- `tailwind.config.js` - Tailwind configuration
- `frontend/package.json` - Dependencies

## Support & Maintenance

### Regular Tasks
- Update product information
- Add new products (follow data structure)
- Optimize images as needed
- Monitor performance metrics
- Update links as site evolves

### Version History
- **v1.0** (Current): Three-category structure with 45 products
- Future versions: TBD

## Contact & Questions
Refer to project documentation or team lead for additional support.
