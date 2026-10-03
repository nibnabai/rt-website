'use client';

import {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ChevronDownIcon,
  CloseCircleIcon,
  HamburgerIcon
} from '@/components/icons/navbar-icons';
import { cn } from '@/lib/utils';
import { cdnUrl } from '@/util/cdn';

type MenuKey = 'product' | 'integrations' | 'resources';

const NAVBAR_MENU_ICON_PATHS = {
  'issue-radar': '/images/navbar/icons/issue-radar.webp',
  'issue-radar-color': '/images/navbar/icons/issue-radar-color.webp',
  'automated-qa': '/images/navbar/icons/automated-qa.webp',
  training: '/images/navbar/icons/training.webp',
  'topic-discovery': '/images/navbar/icons/topic-discovery.webp',
  'ivy-assistant': '/images/navbar/icons/ivy-assistant.webp',
  automations: '/images/navbar/icons/automations.webp',
  'knowledge-base': '/images/navbar/icons/knowledge-base.webp',
  'fha-compliance': '/images/navbar/icons/fha-compliance.webp',
  documentation: '/images/navbar/icons/documentation.webp',
  'integrations-guide': '/images/navbar/icons/integrations-guide.webp',
  blog: '/images/navbar/icons/blog.webp',
  'privacy-policy': '/images/navbar/icons/privacy-policy.webp',
  'terms-of-service': '/images/navbar/icons/terms-of-service.webp'
} as const;

type NavbarMenuIconKey = keyof typeof NAVBAR_MENU_ICON_PATHS;

const getIntegrationLogoPaths = (label: string) => {
  const slug = label
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');

  return {
    default: `/images/navbar/logos/${slug}-default.webp`
  };
};

type NavItem = {
  label: string;
  href: string;
  description?: string;
  icon?: NavbarMenuIconKey;
  iconColor?: NavbarMenuIconKey;
  external?: boolean;
  disabled?: boolean;
};

type NavSection = {
  title: string;
  items: readonly NavItem[];
};

const PRODUCT_FEATURES: readonly NavItem[] = [
  {
    label: 'Issue Radar',
    description: 'Detect and resolve issues before they escalate',
    href: '/features/issue-radar',
    icon: 'issue-radar',
    iconColor: 'issue-radar-color'
  },
  {
    label: 'Automated QA',
    description: 'Analyze all support communications',
    href: '/features/automated-qa',
    icon: 'automated-qa'
  },
  {
    label: 'Training',
    description: 'Deliver consistent Team training across every workflow',
    href: '/features/training',
    icon: 'training'
  },
  {
    label: 'Topic Discovery',
    description: 'Discover the conversations that matter most',
    href: '/features/topic-discovery',
    icon: 'topic-discovery'
  },
  {
    label: 'Ivy',
    description: 'Your AI support analyst teammate',
    href: '/features/ivy',
    icon: 'ivy-assistant'
  },
  {
    label: 'Automations',
    description: 'Reduce manual work with smart automation',
    href: '/features/automations',
    icon: 'automations'
  },
  {
    label: 'Knowledge Base',
    description: "Every customer's setup, verified and cited",
    href: '/features/knowledge-base',
    icon: 'knowledge-base'
  }
];

const PRODUCT_ADDON: NavItem = {
  label: 'FHA Compliance',
  description: 'For Property Managers in the US',
  href: '/fha-compliance',
  icon: 'fha-compliance'
};

const RESOURCE_COLUMNS: readonly NavSection[] = [
  {
    title: 'Docs',
    items: [
      {
        label: 'Documentation',
        description: "A complete reference about RipeText's functionality.",
        href: '/docs',
        icon: 'documentation'
      },
      {
        label: 'Integrations',
        description: 'Connect RipeText to your support platform.',
        href: '/docs/integrations',
        icon: 'integrations-guide'
      },
      {
        label: 'API',
        description: 'Drive RipeText from your own code.',
        href: '/docs/api',
        icon: 'documentation'
      }
    ]
  },
  {
    title: 'Blog',
    items: [
      {
        label: 'Blog',
        description: 'Discover tips, news, and product updates.',
        href: '/blog',
        icon: 'blog'
      }
    ]
  },
  {
    title: 'Legal',
    items: [
      {
        label: 'Privacy Policy',
        description: 'Understand how your information is used.',
        href: '/privacy-policy',
        icon: 'privacy-policy'
      },
      {
        label: 'Terms of Service',
        description: 'Understand your rights and responsibilities.',
        href: '/terms-of-service',
        icon: 'terms-of-service'
      }
    ]
  }
];

const ACTIVE_INTEGRATIONS: readonly NavItem[] = [
  { label: 'Intercom', href: '/docs/integrations/intercom' },
  { label: 'Zendesk', href: '/docs/integrations/zendesk' },
  { label: 'Front', href: '/docs/integrations/front' },
  { label: 'Crisp', href: '/docs/integrations/crisp' },
  { label: 'HubSpot', href: '/docs/integrations/hubspot' },
  { label: 'GitHub', href: '/docs/integrations/github' },
  { label: 'Salesforce', href: '/docs/integrations/salesforce' }
];

const COMING_SOON_INTEGRATIONS: readonly NavItem[] = [
  { label: 'Aircall', href: '#', disabled: true },
  { label: 'Freshdesk', href: '#', disabled: true },
  { label: 'Jira', href: '#', disabled: true }
];

/** Splits a list into two balanced menu columns. */
const splitIntoColumns = (items: readonly NavItem[]) => {
  const half = Math.ceil(items.length / 2);
  return [items.slice(0, half), items.slice(half)] as const;
};

const ROOT_NAV_ITEMS: readonly {
  label: string;
  key?: MenuKey;
  href?: string;
}[] = [
  { label: 'Product', key: 'product' },
  { label: 'Integrations', key: 'integrations' },
  { label: 'Resources', key: 'resources' },
  { label: 'Pricing', href: '/#pricing' }
];

const MENU_CLOSE_DELAY_MS = 120;

const menuPanelEnterClass = 'animate-in fade-in-0 duration-150';

const DESKTOP_MENU_KEYS: readonly MenuKey[] = [
  'product',
  'integrations',
  'resources'
];

/** All desktop menus cap at the Figma frame size, then shrink with the viewport. */
const DESKTOP_MENU_WIDTH_CLASS = 'w-[calc(100vw-32px)] max-w-[1173px]';

const desktopMenuPanelShellClass =
  'rounded-[20px] border border-[#E3E4E9] bg-white px-5 py-6 shadow-[0px_1px_0px_rgba(18,22,31,0.04),0px_12px_40px_rgba(18,22,31,0.08)] xl:px-10 xl:py-[31px]';

const menuVerticalDividerClass = 'w-px shrink-0 self-stretch bg-[#E3E4E9]';

const desktopMenuPanelSwitchClass =
  'col-start-1 row-start-1 transition-opacity duration-150 ease-linear';

const desktopNavLinkClass = (active: boolean) =>
  cn(
    'inline-flex items-center gap-1 text-[14px] font-normal leading-5 whitespace-nowrap transition-colors duration-150 ease-out',
    active ? 'text-[#424F77]' : 'text-[#636A7E] hover:text-[#151A28]'
  );

const sectionTitleClass =
  'text-[12px] font-normal uppercase tracking-[0.6px] text-[#151A28]';
const itemTitleClass =
  'text-[14px] font-normal leading-5 text-[#636A7E] transition-colors duration-150 group-hover:text-[#747CC5]';
const integrationItemTitleClass =
  'min-w-0 text-[14px] font-normal leading-5 text-[#636A7E]';
const integrationItemClass = (disabled?: boolean) =>
  cn(
    'flex w-full items-center gap-2 rounded-[10px] p-[5px] transition-colors duration-150',
    disabled ? 'cursor-default opacity-60' : 'hover:bg-[rgba(221,221,243,0.2)]'
  );

/** Open/hover label color matches Product & Resources mega menu rows. */
const desktopNavMenuTriggerClass = ({
  routeActive,
  menuOpen
}: {
  routeActive: boolean;
  menuOpen: boolean;
}) =>
  cn(
    'inline-flex items-center gap-1 text-[14px] font-normal leading-5 whitespace-nowrap transition-colors duration-150 ease-out',
    menuOpen
      ? 'text-[#747CC5]'
      : routeActive
      ? 'text-[#424F77] hover:text-[#747CC5]'
      : 'text-[#636A7E] hover:text-[#747CC5]'
  );
const itemDescriptionClass =
  'text-[12px] leading-5 text-[#636A7E] transition-colors duration-150 group-hover:text-[#747CC5]';
const iconTileClass =
  'flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] border border-[#E3E4E9] bg-white shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)]';

const logoCrossfadeClass =
  'pointer-events-none object-contain object-center transition-opacity duration-200 ease-in-out';

const NavMenuIcon = ({
  icon,
  iconColor,
  className
}: {
  icon: NavbarMenuIconKey;
  iconColor?: NavbarMenuIconKey;
  className?: string;
}) => {
  const defaultSrc = NAVBAR_MENU_ICON_PATHS[icon];
  const colorSrc = iconColor ? NAVBAR_MENU_ICON_PATHS[iconColor] : null;

  if (colorSrc) {
    return (
      <span
        className={cn(
          'relative block h-5 w-5 shrink-0 overflow-hidden',
          className
        )}
      >
        <span className="absolute inset-0 flex items-center justify-center">
          <Image
            src={cdnUrl(colorSrc)}
            alt=""
            width={80}
            height={80}
            unoptimized
            className={cn(
              logoCrossfadeClass,
              'h-5 w-5 opacity-0 group-hover:opacity-100'
            )}
          />
        </span>
        <span className="absolute inset-0 flex items-center justify-center">
          <Image
            src={cdnUrl(defaultSrc)}
            alt=""
            width={80}
            height={80}
            unoptimized
            className={cn(
              logoCrossfadeClass,
              'h-5 w-5 opacity-100 group-hover:opacity-0'
            )}
          />
        </span>
      </span>
    );
  }

  return (
    <Image
      src={cdnUrl(defaultSrc)}
      alt=""
      width={80}
      height={80}
      unoptimized
      className={cn('h-5 w-5 shrink-0 object-contain', className)}
    />
  );
};

const IntegrationLogo = ({ label }: { label: string }) => {
  const { default: defaultSrc } = getIntegrationLogoPaths(label);

  return (
    <span aria-hidden className="integration-logo">
      <span className="integration-logo__plate">
        <Image
          src={cdnUrl(defaultSrc)}
          alt=""
          width={38}
          height={38}
          unoptimized
          className="integration-logo__img"
        />
      </span>
    </span>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDesktopMenu, setActiveDesktopMenu] = useState<MenuKey | null>(
    null
  );
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<MenuKey | null>(
    null
  );
  const pathname = usePathname();
  const desktopMenuRef = useRef<HTMLDivElement | null>(null);
  const megaMenuTriggersRef = useRef<HTMLDivElement | null>(null);
  const megaMenuPanelRef = useRef<HTMLDivElement | null>(null);
  const desktopMenuCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );
  /** After click-to-close on a trigger, block hover-open until pointer leaves that trigger. */
  const desktopMenuDismissedUntilLeaveRef = useRef(false);

  const clearDesktopMenuCloseTimer = useCallback(() => {
    if (desktopMenuCloseTimerRef.current) {
      clearTimeout(desktopMenuCloseTimerRef.current);
      desktopMenuCloseTimerRef.current = null;
    }
  }, []);

  const canOpenDesktopMenu = useCallback(
    () => !desktopMenuDismissedUntilLeaveRef.current,
    []
  );

  const closeDesktopMenu = useCallback(() => {
    clearDesktopMenuCloseTimer();
    setActiveDesktopMenu(null);
  }, [clearDesktopMenuCloseTimer]);

  const scheduleDesktopMenuClose = useCallback(() => {
    clearDesktopMenuCloseTimer();
    desktopMenuCloseTimerRef.current = setTimeout(() => {
      setActiveDesktopMenu(null);
    }, MENU_CLOSE_DELAY_MS);
  }, [clearDesktopMenuCloseTimer]);

  const handleMegaMenuPointerLeave = useCallback(
    (event: React.MouseEvent) => {
      const next = event.relatedTarget;
      if (next instanceof Node) {
        if (megaMenuTriggersRef.current?.contains(next)) {
          return;
        }

        if (megaMenuPanelRef.current?.contains(next)) {
          return;
        }
      }

      if (desktopMenuDismissedUntilLeaveRef.current) {
        return;
      }

      scheduleDesktopMenuClose();
    },
    [scheduleDesktopMenuClose]
  );

  const openDesktopMenu = useCallback(
    (key: MenuKey) => {
      if (!canOpenDesktopMenu()) {
        return;
      }

      clearDesktopMenuCloseTimer();
      setActiveDesktopMenu(key);
    },
    [canOpenDesktopMenu, clearDesktopMenuCloseTimer]
  );

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    setExpandedMobileMenu(null);
  }, []);

  const isActive = useCallback(
    (href: string) => {
      if (href === '/docs/integrations') {
        return pathname?.startsWith('/docs/integrations') ?? false;
      }
      if (href.startsWith('/#')) return pathname === '/';
      return pathname === href || Boolean(pathname?.startsWith(href + '/'));
    },
    [pathname]
  );

  const desktopMenuState = useMemo(
    () => ({
      product:
        PRODUCT_FEATURES.some(({ href }) => isActive(href)) ||
        isActive(PRODUCT_ADDON.href),
      integrations: [...ACTIVE_INTEGRATIONS, ...COMING_SOON_INTEGRATIONS].some(
        ({ href }) => isActive(href)
      ),
      resources: RESOURCE_COLUMNS.some((section) =>
        section.items.some(({ href }) => isActive(href))
      )
    }),
    [isActive]
  );

  useEffect(() => {
    setIsMenuOpen(false);
    setExpandedMobileMenu(null);
    closeDesktopMenu();
  }, [pathname, closeDesktopMenu]);

  useEffect(
    () => () => {
      clearDesktopMenuCloseTimer();
    },
    [clearDesktopMenuCloseTimer]
  );

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Node) || !activeDesktopMenu) {
        return;
      }

      if (megaMenuTriggersRef.current?.contains(target)) {
        return;
      }

      if (megaMenuPanelRef.current?.contains(target)) {
        return;
      }

      closeDesktopMenu();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeDesktopMenu();
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeDesktopMenu, closeDesktopMenu, closeMenu]);

  const renderStandardMenuItem = (
    item: NavItem,
    compact = false,
    onNavigate?: () => void
  ) => {
    const content = (
      <>
        {item.icon ? (
          <span className={iconTileClass}>
            <NavMenuIcon icon={item.icon} iconColor={item.iconColor} />
          </span>
        ) : null}
        <span
          className={cn(
            'flex min-w-0 flex-col',
            compact ? 'w-[156px]' : 'flex-1'
          )}
        >
          <span
            className={cn(
              itemTitleClass,
              item.disabled && 'group-hover:text-[#636A7E]'
            )}
          >
            {item.label}
          </span>
          {item.description ? (
            <span
              className={cn(
                itemDescriptionClass,
                item.disabled && 'group-hover:text-[#636A7E]'
              )}
            >
              {item.description}
            </span>
          ) : null}
        </span>
      </>
    );

    const itemClass = cn(
      'group flex items-center gap-2 rounded-[12px]',
      compact ? 'w-full max-w-[360px]' : 'w-full',
      item.disabled && 'cursor-default opacity-60'
    );

    if (item.disabled) {
      return (
        <div key={item.label} className={itemClass} aria-disabled="true">
          {content}
        </div>
      );
    }

    if (item.external) {
      return (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={itemClass}
          onClick={onNavigate}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        key={item.label}
        href={item.href}
        className={itemClass}
        onClick={onNavigate}
      >
        {content}
      </Link>
    );
  };

  const renderIntegrationItem = (item: NavItem, onNavigate?: () => void) => {
    const content = (
      <>
        <IntegrationLogo label={item.label} />
        <span className={integrationItemTitleClass}>{item.label}</span>
      </>
    );

    const itemClass = integrationItemClass(item.disabled);

    if (item.disabled) {
      return (
        <div key={item.label} className={itemClass} aria-disabled="true">
          {content}
        </div>
      );
    }

    return (
      <Link
        key={item.label}
        href={item.href}
        className={itemClass}
        onClick={onNavigate}
      >
        {content}
      </Link>
    );
  };

  const closeDesktopMenuOnNavigate = useCallback(() => {
    closeDesktopMenu();
  }, [closeDesktopMenu]);

  const renderDesktopPanel = (menu: MenuKey) => {
    const panelProps = {
      className: cn(DESKTOP_MENU_WIDTH_CLASS, desktopMenuPanelShellClass)
    };

    if (menu === 'integrations') {
      const renderIntegrationColumn = (items: readonly NavItem[]) => (
        <div className="flex min-w-0 flex-1 flex-col gap-6 xl:gap-8">
          {items.map((item) =>
            renderIntegrationItem(item, closeDesktopMenuOnNavigate)
          )}
        </div>
      );

      return (
        <div {...panelProps}>
          <div className="flex min-h-[240px] gap-5 xl:gap-[30px]">
            <div className="flex min-w-0 flex-1 gap-4 xl:gap-[30px]">
              <div className="flex min-w-0 flex-1 flex-col gap-[25px]">
                <p className={sectionTitleClass}>Integrations</p>
                <div className="flex min-w-0 gap-4 xl:gap-[30px]">
                  {splitIntoColumns(ACTIVE_INTEGRATIONS).map(
                    (column, index) => (
                      <Fragment key={index}>
                        {renderIntegrationColumn(column)}
                      </Fragment>
                    )
                  )}
                </div>
              </div>
            </div>
            <div className={menuVerticalDividerClass} />
            <div className="flex min-w-0 flex-1 gap-4 xl:gap-[30px]">
              <div className="flex min-w-0 flex-1 flex-col gap-[25px]">
                <p className={sectionTitleClass}>Coming soon</p>
                <div className="flex min-w-0 gap-4 xl:gap-[30px]">
                  {splitIntoColumns(COMING_SOON_INTEGRATIONS).map(
                    (column, index) => (
                      <Fragment key={index}>
                        {renderIntegrationColumn(column)}
                      </Fragment>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (menu === 'product') {
      return (
        <div {...panelProps}>
          <div className="flex min-h-[240px] items-start gap-5 xl:gap-[37px]">
            <div className="flex min-w-0 flex-1 basis-0 flex-col gap-[25px]">
              <p className={sectionTitleClass}>Features</p>
              <div className="flex flex-col gap-8">
                {PRODUCT_FEATURES.slice(0, 4).map((item) =>
                  renderStandardMenuItem(
                    item,
                    false,
                    closeDesktopMenuOnNavigate
                  )
                )}
              </div>
            </div>
            <div className="flex min-w-0 flex-1 basis-0 flex-col justify-end gap-8 pt-[43px]">
              {PRODUCT_FEATURES.slice(4).map((item) =>
                renderStandardMenuItem(item, false, closeDesktopMenuOnNavigate)
              )}
            </div>
            <div className={menuVerticalDividerClass} />
            <div className="flex min-w-[210px] flex-[0_1_262px] flex-col gap-[15px] rounded-[10px] bg-white px-[15px] pb-[15px]">
              <p className={sectionTitleClass}>Add-on</p>
              {renderStandardMenuItem(
                PRODUCT_ADDON,
                false,
                closeDesktopMenuOnNavigate
              )}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div {...panelProps}>
        <div className="flex min-h-[240px] items-start">
          {RESOURCE_COLUMNS.map((column, index) => (
            <Fragment key={column.title}>
              {index > 0 ? (
                <div
                  className={cn(
                    menuVerticalDividerClass,
                    'mx-5 h-[240px] xl:mx-[30px]'
                  )}
                />
              ) : null}
              <div
                className={cn(
                  'flex min-w-0 flex-1 flex-col gap-[25px]',
                  column.title === 'Docs' ? 'basis-[360px]' : 'basis-[300px]'
                )}
              >
                <p className={sectionTitleClass}>{column.title}</p>
                <div className="flex flex-col gap-8">
                  {column.items.map((item) =>
                    renderStandardMenuItem(
                      item,
                      false,
                      closeDesktopMenuOnNavigate
                    )
                  )}
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    );
  };

  const mobileRootTextClass =
    'text-[16px] font-normal leading-[27.692px] text-[#424F77]';
  const mobileSectionTitleClass =
    'text-[12px] font-normal uppercase leading-4 tracking-[0.6px] text-[#151A28]';
  const mobileDropdownItemClass =
    'block text-[13px] font-normal leading-[27.692px] text-[#424F77]';
  const mobileDropdownDisabledItemClass =
    'block cursor-default text-[13px] font-normal leading-[27.692px] text-[#A0A6B5]';

  const renderMobilePlainItem = (item: NavItem) => {
    if (item.disabled) {
      return (
        <span
          key={item.label}
          className={mobileDropdownDisabledItemClass}
          aria-disabled="true"
        >
          {item.label}
        </span>
      );
    }

    return (
      <Link
        key={item.label}
        href={item.href}
        className={mobileDropdownItemClass}
        onClick={closeMenu}
      >
        {item.label}
      </Link>
    );
  };

  const renderMobileSection = (title: string, items: readonly NavItem[]) => (
    <div className="flex flex-col gap-[5px]">
      <p className={mobileSectionTitleClass}>{title}</p>
      <div className="flex flex-col gap-[5px]">
        {items.map((item) => renderMobilePlainItem(item))}
      </div>
    </div>
  );

  const renderMobileDropdown = (menu: MenuKey) => {
    if (menu === 'product') {
      return (
        <div className="flex flex-col gap-5 pt-2.5">
          {renderMobileSection('Features:', PRODUCT_FEATURES)}
          {renderMobileSection('Add-on:', [PRODUCT_ADDON])}
        </div>
      );
    }

    if (menu === 'integrations') {
      return (
        <div className="flex flex-col gap-5 pt-2.5">
          {renderMobileSection('Integrations:', ACTIVE_INTEGRATIONS)}
          {renderMobileSection('Coming soon:', COMING_SOON_INTEGRATIONS)}
        </div>
      );
    }

    return (
      <div className="flex flex-col gap-5 pt-2.5">
        {RESOURCE_COLUMNS.map((section) =>
          renderMobileSection(`${section.title}:`, section.items)
        )}
      </div>
    );
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-14 border-b border-[#E3E4E9] bg-[rgba(252,252,253,0.92)] backdrop-blur-[20px]"
      />
      <div ref={desktopMenuRef} className="relative mx-auto max-w-[1400px]">
        <div className="flex h-14 items-center justify-between px-5 lg:px-8">
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="hidden lg:block"
              aria-label="RipeText home"
            >
              <Image
                src={cdnUrl('/images/fha-compliance/logo.png')}
                alt="RipeText"
                width={107}
                height={22}
                unoptimized
                className="h-[22px] w-auto object-contain"
                priority
              />
            </Link>

            <Link
              href="/"
              className="block lg:hidden"
              aria-label="RipeText home"
            >
              <Image
                src={cdnUrl('/images/ripetext-logo-dark-mobile.webp')}
                alt="RipeText"
                width={29}
                height={27}
                unoptimized
                className="h-[27px] w-[29px] object-contain"
                priority
              />
            </Link>

            <div
              ref={megaMenuTriggersRef}
              className="hidden items-center gap-7 lg:flex"
              onMouseLeave={handleMegaMenuPointerLeave}
            >
              {ROOT_NAV_ITEMS.map((item) => {
                if (item.href) {
                  const href = item.href;
                  return (
                    <Link
                      key={item.label}
                      href={href}
                      scroll={false}
                      className={desktopNavLinkClass(isActive(href))}
                      onMouseEnter={closeDesktopMenu}
                    >
                      {item.label}
                    </Link>
                  );
                }

                const key = item.key as MenuKey;
                const isOpen = activeDesktopMenu === key;

                return (
                  <button
                    key={item.label}
                    type="button"
                    className={desktopNavMenuTriggerClass({
                      routeActive: desktopMenuState[key],
                      menuOpen: isOpen
                    })}
                    onMouseEnter={() => openDesktopMenu(key)}
                    onMouseLeave={() => {
                      desktopMenuDismissedUntilLeaveRef.current = false;
                    }}
                    onClick={() => {
                      if (isOpen) {
                        desktopMenuDismissedUntilLeaveRef.current = true;
                        closeDesktopMenu();
                        return;
                      }

                      desktopMenuDismissedUntilLeaveRef.current = false;
                      openDesktopMenu(key);
                    }}
                    aria-expanded={isOpen}
                    aria-haspopup="menu"
                  >
                    {item.label}
                    <ChevronDownIcon
                      className={cn(
                        'h-4 w-4 transition-transform duration-150 ease-out',
                        isOpen && 'rotate-180'
                      )}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="hidden shrink-0 items-center gap-4 lg:flex">
            <a
              href="mailto:sales@ripetext.com"
              className="text-[14px] font-medium leading-5 text-[#151A28] transition-opacity hover:opacity-70"
            >
              Talk to Sales
            </a>
            <a
              href="https://calendly.com/tsenkov"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[31px] items-center justify-center rounded-[10px] bg-[#192854] px-[14px] text-[14px] font-semibold leading-5 text-white transition-colors hover:bg-[#22346B]"
            >
              Book a Demo
            </a>
          </div>

          <button
            type="button"
            className="p-1 lg:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <CloseCircleIcon className="h-[31px] w-[31px]" />
            ) : (
              <HamburgerIcon className="h-6 w-6" />
            )}
          </button>
        </div>

        {activeDesktopMenu ? (
          <div
            ref={megaMenuPanelRef}
            className={cn(
              'absolute left-0 right-0 top-full -mt-3 mx-auto hidden pt-3 lg:block',
              DESKTOP_MENU_WIDTH_CLASS
            )}
            onMouseEnter={clearDesktopMenuCloseTimer}
            onMouseLeave={handleMegaMenuPointerLeave}
          >
            <div
              className={cn(
                'grid justify-items-center pt-1',
                DESKTOP_MENU_WIDTH_CLASS,
                menuPanelEnterClass
              )}
            >
              {DESKTOP_MENU_KEYS.map((key) => (
                <div
                  key={key}
                  className={cn(
                    desktopMenuPanelSwitchClass,
                    DESKTOP_MENU_WIDTH_CLASS,
                    activeDesktopMenu === key
                      ? 'pointer-events-auto z-10 opacity-100'
                      : 'pointer-events-none z-0 opacity-0'
                  )}
                  aria-hidden={activeDesktopMenu !== key}
                >
                  {renderDesktopPanel(key)}
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>

      {isMenuOpen ? (
        <div className="absolute inset-x-0 top-0 h-dvh overflow-y-auto bg-white lg:hidden">
          <div className="flex items-center justify-between px-[10px] py-3">
            <Link
              href="/"
              className="block"
              onClick={closeMenu}
              aria-label="RipeText home"
            >
              <Image
                src={cdnUrl('/images/ripetext-logo-dark-mobile.webp')}
                alt="RipeText"
                width={29}
                height={27}
                unoptimized
                className="h-[27px] w-[29px] object-contain"
              />
            </Link>

            <button
              type="button"
              className="p-1"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <CloseCircleIcon className="h-[31px] w-[31px]" />
            </button>
          </div>

          <div className="flex min-h-[calc(100dvh-55px)] flex-col px-5 pb-7 pt-[25px]">
            <div className="flex flex-col gap-5">
              {ROOT_NAV_ITEMS.map((item) => {
                if (item.href) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      scroll={false}
                      className={mobileRootTextClass}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  );
                }

                const key = item.key as MenuKey;
                const isExpanded = expandedMobileMenu === key;

                return (
                  <div key={item.label} className="flex flex-col">
                    <button
                      type="button"
                      className={cn(
                        'inline-flex items-center gap-[6px] self-start text-left',
                        mobileRootTextClass
                      )}
                      onClick={() =>
                        setExpandedMobileMenu((current) =>
                          current === key ? null : key
                        )
                      }
                      aria-expanded={isExpanded}
                      aria-controls={`mobile-${key}-menu`}
                    >
                      {item.label}
                      <ChevronDownIcon
                        className={cn(
                          'h-4 w-4 transition-transform duration-150 ease-out',
                          isExpanded && 'rotate-180'
                        )}
                      />
                    </button>
                    {isExpanded ? (
                      <div id={`mobile-${key}-menu`}>
                        {renderMobileDropdown(key)}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>

            <div className="mt-auto flex flex-col items-center gap-4 pb-6 pt-10">
              <a
                href="https://calendly.com/tsenkov"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-full items-center justify-center rounded-[10px] bg-[#0F1D43] px-4 text-[14px] font-semibold leading-5 text-white"
              >
                Book a Demo
              </a>
              <a
                href="mailto:sales@ripetext.com"
                className="text-[14px] font-medium leading-5 text-[#151A28]"
              >
                Talk to Sales
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
