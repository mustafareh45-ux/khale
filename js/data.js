/* ============================================================
   KHALÉ — Products Data & SVG Icons
   ============================================================ */

/* ---- SVG Icon Library ---- */
const ICONS = {
  /* Product illustrations */
  brushLarge: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="46" y="56" width="8" height="34" rx="4" fill="currentColor" opacity=".85"/>
    <circle cx="50" cy="36" r="22" stroke="currentColor" stroke-width="2.5" fill="currentColor" fill-opacity=".08"/>
    <circle cx="50" cy="36" r="13" fill="currentColor" opacity=".2"/>
    <line x1="50" y1="14" x2="50" y2="7"  stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <line x1="64" y1="20" x2="69" y2="15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <line x1="72" y1="34" x2="79" y2="34" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <line x1="66" y1="50" x2="71" y2="55" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <line x1="36" y1="20" x2="31" y2="15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <line x1="28" y1="34" x2="21" y2="34" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <line x1="34" y1="50" x2="29" y2="55" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  brushSmall: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="47" y="58" width="6" height="30" rx="3" fill="currentColor" opacity=".85"/>
    <circle cx="50" cy="40" r="18" stroke="currentColor" stroke-width="2.5" fill="currentColor" fill-opacity=".08"/>
    <circle cx="50" cy="40" r="10" fill="currentColor" opacity=".22"/>
    <line x1="50" y1="22" x2="50" y2="16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <line x1="62" y1="27" x2="66" y2="23" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <line x1="68" y1="40" x2="74" y2="40" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <line x1="62" y1="53" x2="66" y2="57" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <line x1="38" y1="27" x2="34" y2="23" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <line x1="32" y1="40" x2="26" y2="40" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <line x1="38" y1="53" x2="34" y2="57" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  curler30: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="32" cy="50" rx="10" ry="27" fill="currentColor" fill-opacity=".12" stroke="currentColor" stroke-width="2.5"/>
    <ellipse cx="32" cy="50" rx="4" ry="21" fill="currentColor" opacity=".25"/>
    <rect x="41" y="43" width="38" height="14" rx="7" fill="currentColor" opacity=".88"/>
    <rect x="45" y="46" width="5" height="8" rx="2" fill="currentColor" opacity=".5"/>
    <line x1="32" y1="23" x2="32" y2="13" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
    <circle cx="32" cy="12" r="3" fill="currentColor" opacity=".6"/>
  </svg>`,

  curler40: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="30" cy="50" rx="13" ry="30" fill="currentColor" fill-opacity=".12" stroke="currentColor" stroke-width="2.5"/>
    <ellipse cx="30" cy="50" rx="5" ry="23" fill="currentColor" opacity=".22"/>
    <rect x="42" y="43" width="38" height="14" rx="7" fill="currentColor" opacity=".88"/>
    <rect x="46" y="46" width="5" height="8" rx="2" fill="currentColor" opacity=".5"/>
    <line x1="30" y1="20" x2="30" y2="9"  stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
    <circle cx="30" cy="8" r="3.5" fill="currentColor" opacity=".6"/>
  </svg>`,

  dryer: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 28 L22 72 L72 82 L72 18 Z" fill="currentColor" fill-opacity=".1" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
    <circle cx="41" cy="38" r="3.5" fill="currentColor" opacity=".7"/>
    <circle cx="53" cy="38" r="3.5" fill="currentColor" opacity=".7"/>
    <circle cx="41" cy="50" r="3.5" fill="currentColor" opacity=".7"/>
    <circle cx="53" cy="50" r="3.5" fill="currentColor" opacity=".7"/>
    <circle cx="41" cy="62" r="3.5" fill="currentColor" opacity=".7"/>
    <circle cx="53" cy="62" r="3.5" fill="currentColor" opacity=".7"/>
    <rect x="7" y="40" width="16" height="20" rx="5" fill="currentColor" opacity=".82"/>
  </svg>`,

  set: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 10 L55 27 L73 27 L59 37 L64 54 L50 44 L36 54 L41 37 L27 27 L45 27 Z" fill="currentColor" fill-opacity=".28" stroke="currentColor" stroke-width="1.5"/>
    <circle cx="22" cy="78" r="9"  fill="currentColor" opacity=".55"/>
    <circle cx="37" cy="84" r="9"  fill="currentColor" opacity=".55"/>
    <circle cx="50" cy="87" r="10" fill="currentColor" opacity=".75"/>
    <circle cx="63" cy="84" r="9"  fill="currentColor" opacity=".55"/>
    <circle cx="78" cy="78" r="9"  fill="currentColor" opacity=".55"/>
  </svg>`,

  /* UI Icons */
  cart: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z"/></svg>`,
  heart: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/></svg>`,
  search: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/></svg>`,
  menu: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>`,
  close: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>`,
  plus: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/></svg>`,
  minus: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15"/></svg>`,
  trash: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/></svg>`,
  check: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>`,
  arrowUp: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"/></svg>`,
  chevronDown: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/></svg>`,
  chevronRight: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/></svg>`,
  truck: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"/></svg>`,
  shield: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/></svg>`,
  refresh: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"/></svg>`,
  lock: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"/></svg>`,
  star: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"/></svg>`,
  starEmpty: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/></svg>`,
  phone: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/></svg>`,
  mail: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>`,
  map: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/></svg>`,
  instagram: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
  tiktok: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.73a4.85 4.85 0 01-1.01-.04z"/></svg>`,
  whatsapp: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`,
  tag: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"/><path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"/></svg>`,
  helpCircle: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"/></svg>`,
  shoppingBag: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z"/></svg>`,
  user: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/></svg>`,
  checkCircle: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
  cash: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"/></svg>`,
  mobile: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"/></svg>`,
};

/* ---- Products ---- */
const PRODUCTS = [
  {
    id: 1,
    name: "طقم KHALÉ الكامل للتصفيف",
    shortDesc: "كل ما تحتاجينه لتصفيفة مثالية",
    price: 285000,
    originalPrice: 340000,
    discount: 16,
    category: "sets",
    badge: "الأكثر مبيعاً",
    badgeType: "bestseller",
    rating: 4.9,
    reviewCount: 128,
    stock: 15,
    icon: "set",
    sku: "KHL-SET-001",
    description: "طقم KHALÉ الشامل يجمع بين الأناقة والأداء الاحترافي. مصمم خصيصاً للمرأة العربية التي تهتم بشعرها وتسعى للحصول على نتائج صالون في المنزل. يحتوي الطقم على كل الأدوات الضرورية لتصفيفة شاملة ومتكاملة.",
    features: [
      "فرشاة تصفيف كبيرة ومتعددة الأغراض",
      "فرشاة تصفيف صغيرة للتفاصيل الدقيقة",
      "كيرلر 30 مم لتموجات محكمة ورومانسية",
      "كيرلر 40 مم لتموجات هوليوودية فضفاضة",
      "ملحق مجفف الشعر الاحترافي",
      "حقيبة تخزين فاخرة مع الطقم"
    ],
    reviews: [
      { name: "نور الهاشمي", rating: 5, date: "منذ أسبوعين", text: "طقم رائع بكل معنى الكلمة! الجودة عالية جداً والنتائج تفوق توقعاتي. أنصح به بشدة لكل من تبحث عن أدوات تصفيف احترافية.", verified: true },
      { name: "لينا محمد", rating: 5, date: "منذ شهر", text: "استثمار ممتاز! شعري أصبح يبدو كأنني خرجت من الصالون في كل مرة أستخدمه. الطقم كامل ولا ينقصه شيء.", verified: true },
      { name: "سارة عبدالله", rating: 4, date: "منذ 3 أسابيع", text: "جودة عالية جداً ويستحق سعره تماماً. الوحيد الذي أحب تحسينه هو حقيبة التخزين.", verified: true }
    ]
  },
  {
    id: 2,
    name: "فرشاة التصفيف الكبيرة",
    shortDesc: "لتصفيفة ناعمة وحجم رائع",
    price: 55000,
    originalPrice: null,
    discount: 0,
    category: "brushes",
    badge: null,
    badgeType: null,
    rating: 4.7,
    reviewCount: 89,
    stock: 30,
    icon: "brushLarge",
    sku: "KHL-BRU-L01",
    description: "فرشاة التصفيف الكبيرة من KHALÉ مصنوعة بشعيرات حريرية متطورة مزدوجة من النايلون والألياف الطبيعية تمنح شعرك لمعاناً ونعومة استثنائية مع كل استخدام.",
    features: [
      "شعيرات نايلون وألياف طبيعية مزدوجة",
      "قبضة مريحة مضادة للانزلاق",
      "مثالية للشعر الطويل والكثيف",
      "تضمن توزيعاً متساوياً للحرارة"
    ],
    reviews: [
      { name: "مريم القاسم", rating: 5, date: "منذ أسبوع", text: "فرشاة رائعة! تمنح الشعر حجماً وبريقاً جميلين جداً. أفضل فرشاة استخدمتها حتى الآن.", verified: true },
      { name: "هند الرشيد", rating: 4, date: "منذ شهرين", text: "جودة ممتازة وقبضة مريحة جداً حتى للاستخدام المطول.", verified: true }
    ]
  },
  {
    id: 3,
    name: "فرشاة التصفيف الصغيرة",
    shortDesc: "للتفاصيل الدقيقة والشعر القصير",
    price: 45000,
    originalPrice: null,
    discount: 0,
    category: "brushes",
    badge: "جديد",
    badgeType: "new",
    rating: 4.6,
    reviewCount: 54,
    stock: 25,
    icon: "brushSmall",
    sku: "KHL-BRU-S01",
    description: "فرشاة التصفيف الصغيرة مثالية للشعر القصير أو للتعامل مع مقدمة الشعر والتفاصيل الدقيقة. حجمها المدمج يجعلها مثالية للسفر أيضاً.",
    features: [
      "حجم مدمج مثالي للسفر والتنقل",
      "شعيرات مرنة للتحكم الدقيق",
      "مثالية لمنطقة المقدمة والجوانب",
      "مصممة بعناية للشعر القصير والمتوسط"
    ],
    reviews: [
      { name: "فاطمة النصر", rating: 5, date: "منذ 3 أيام", text: "ممتازة للشعر القصير! نتائج رائعة في وقت قياسي.", verified: true },
      { name: "ريم الأمين", rating: 4, date: "منذ أسبوعين", text: "صغيرة الحجم لكن نتائجها كبيرة. أحملها معي في كل سفرة.", verified: true }
    ]
  },
  {
    id: 4,
    name: "كيرلر 30 مم",
    shortDesc: "تموجات محكمة وطولها مثير",
    price: 35000,
    originalPrice: null,
    discount: 0,
    category: "curlers",
    badge: null,
    badgeType: null,
    rating: 4.8,
    reviewCount: 72,
    stock: 20,
    icon: "curler30",
    sku: "KHL-CRL-30",
    description: "كيرلر 30 مم من KHALÉ لتلك التموجات المحكمة والرومانسية التي تدوم طوال اليوم. تقنية الحرارة الثابتة تحمي شعرك من التلف بينما تمنحك تجعدات مثالية.",
    features: [
      "برميل 30 مم للتموجات الضيقة والمحكمة",
      "تقنية تيتانيوم للحرارة المتساوية",
      "3 درجات حرارة قابلة للتعديل",
      "يسخن خلال 30 ثانية فقط"
    ],
    reviews: [
      { name: "نادية الزهراني", rating: 5, date: "منذ أسبوعين", text: "تموجات تدوم طوال اليوم حتى في الطقس الرطب! أحبه جداً.", verified: true },
      { name: "أميرة السيد", rating: 5, date: "منذ شهر", text: "جودة استثنائية، شعري لا يتلف معه أبداً رغم كثرة الاستخدام.", verified: true }
    ]
  },
  {
    id: 5,
    name: "كيرلر 40 مم",
    shortDesc: "تموجات هوليوودية فضفاضة",
    price: 35000,
    originalPrice: null,
    discount: 0,
    category: "curlers",
    badge: null,
    badgeType: null,
    rating: 4.7,
    reviewCount: 65,
    stock: 20,
    icon: "curler40",
    sku: "KHL-CRL-40",
    description: "كيرلر 40 مم للتموجات الهوليوودية الفضفاضة والطبيعية. مثالي لإطلالة كلاسيكية فاخرة تناسب كل المناسبات.",
    features: [
      "برميل 40 مم للتموجات الواسعة والطبيعية",
      "تقنية تيتانيوم للحرارة المتساوية",
      "مثالي للشعر الكثيف والطويل",
      "طلاء سيراميك يقلل التلف الحراري"
    ],
    reviews: [
      { name: "ريم البكر", rating: 5, date: "منذ أسبوع", text: "تموجات طبيعية وجميلة جداً! أفضل كيرلر جربته في حياتي.", verified: true },
      { name: "دانة الحمد", rating: 5, date: "منذ 3 أسابيع", text: "يعطي نتائج احترافية رائعة في المنزل.", verified: true }
    ]
  },
  {
    id: 6,
    name: "ملحق مجفف الشعر",
    shortDesc: "لتجفيف احترافي سريع ومتساوٍ",
    price: 60000,
    originalPrice: 75000,
    discount: 20,
    category: "accessories",
    badge: "خصم 20%",
    badgeType: "sale",
    rating: 4.8,
    reviewCount: 91,
    stock: 18,
    icon: "dryer",
    sku: "KHL-DRY-A01",
    description: "ملحق مجفف الشعر المتطور من KHALÉ يحوّل مجففك العادي إلى أداة تصفيف احترافية. تقنية تشتيت الهواء تضمن تجفيفاً متساوياً يحافظ على صحة شعرك.",
    features: [
      "متوافق مع معظم أنواع مجففات الشعر",
      "يقلل وقت التجفيف بنسبة 40%",
      "تقنية تشتيت الهواء للتجفيف المتساوي",
      "يحافظ على رطوبة الشعر أثناء التجفيف"
    ],
    reviews: [
      { name: "دانة الحربي", rating: 5, date: "منذ 4 أيام", text: "ملحق رائع! يوفر الوقت ويعطي نتائج احترافية مذهلة.", verified: true },
      { name: "نوف المطيري", rating: 4, date: "منذ 3 أسابيع", text: "جيد جداً ويتناسب مع مجففي تماماً. يستحق شراءه.", verified: true }
    ]
  }
];

/* ---- Helper: Format price ---- */
function formatPrice(n) {
  return n.toLocaleString('ar-IQ') + ' د.ع';
}

/* ---- Helper: Render star rating ---- */
function renderStars(rating, size = '') {
  let html = `<div class="stars${size ? ' '+size : ''}">`;
  for (let i = 1; i <= 5; i++) {
    html += `<span class="star${i > rating ? ' empty' : ''}">${i <= rating ? ICONS.star : ICONS.starEmpty}</span>`;
  }
  return html + '</div>';
}

/* ---- Helper: Get product by id ---- */
function getProduct(id) {
  return PRODUCTS.find(p => p.id === parseInt(id));
}

/* ---- Helper: Filter products ---- */
function filterProducts(category) {
  if (category === 'all') return PRODUCTS;
  return PRODUCTS.filter(p => p.category === category);
}
