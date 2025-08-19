import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Theme = 'light' | 'dark' | 'system';
export type Currency = 'USD' | 'EUR' | 'GBP' | 'JPY' | 'PKR';

export interface UserPreferencesState {
    // Theme preferences
    theme: Theme;
    systemTheme: 'light' | 'dark';

    // Currency preferences
    currency: Currency;
    exchangeRates: Record<Currency, number>;

    // Display preferences
    itemsPerPage: number;
    defaultView: 'grid' | 'list';
    showQuickView: boolean;
    showReviews: boolean;

    // Notification preferences
    emailNotifications: boolean;
    pushNotifications: boolean;
    marketingEmails: boolean;

    // Actions
    setTheme: (theme: Theme) => void;
    setSystemTheme: (systemTheme: 'light' | 'dark') => void;
    setCurrency: (currency: Currency) => void;
    setItemsPerPage: (items: number) => void;
    setDefaultView: (view: 'grid' | 'list') => void;
    setShowQuickView: (show: boolean) => void;
    setShowReviews: (show: boolean) => void;
    setEmailNotifications: (enabled: boolean) => void;
    setPushNotifications: (enabled: boolean) => void;
    setMarketingEmails: (enabled: boolean) => void;

    // Utility actions
    toggleTheme: () => void;
    getEffectiveTheme: () => 'light' | 'dark';
    convertPrice: (price: number) => number;
    getCurrencySymbol: () => string;
}

const defaultExchangeRates: Record<Currency, number> = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.73,
    JPY: 110.0,
    PKR: 278.0,
};

export const useUserPreferencesStore = create<UserPreferencesState>()(
    persist(
        (set, get) => ({
            theme: 'system',
            systemTheme: 'light',
            currency: 'USD',
            exchangeRates: defaultExchangeRates,
            itemsPerPage: 12,
            defaultView: 'grid',
            showQuickView: true,
            showReviews: true,
            emailNotifications: true,
            pushNotifications: false,
            marketingEmails: false,

            setTheme: (theme) => set({ theme }),
            setSystemTheme: (systemTheme) => set({ systemTheme }),
            setCurrency: (currency) => set({ currency }),
            setItemsPerPage: (itemsPerPage) => set({ itemsPerPage }),
            setDefaultView: (defaultView) => set({ defaultView }),
            setShowQuickView: (showQuickView) => set({ showQuickView }),
            setShowReviews: (showReviews) => set({ showReviews }),
            setEmailNotifications: (emailNotifications) => set({ emailNotifications }),
            setPushNotifications: (pushNotifications) => set({ pushNotifications }),
            setMarketingEmails: (marketingEmails) => set({ marketingEmails }),

            toggleTheme: () => set((state) => {
                const themes: Theme[] = ['light', 'dark', 'system'];
                const currentIndex = themes.indexOf(state.theme);
                const nextIndex = (currentIndex + 1) % themes.length;
                return { theme: themes[nextIndex] };
            }),

            getEffectiveTheme: () => {
                const state = get();
                if (state.theme === 'system') {
                    return state.systemTheme;
                }
                return state.theme;
            },

            convertPrice: (price) => {
                const state = get();
                const rate = state.exchangeRates[state.currency];
                return price * rate;
            },

            getCurrencySymbol: () => {
                const state = get();
                const symbols: Record<Currency, string> = {
                    USD: '$',
                    EUR: '€',
                    GBP: '£',
                    JPY: '¥',
                    PKR: '₨',
                };
                return symbols[state.currency];
            }
        }),
        {
            name: 'user-preferences',
            partialize: (state) => ({
                theme: state.theme,
                currency: state.currency,
                itemsPerPage: state.itemsPerPage,
                defaultView: state.defaultView,
                showQuickView: state.showQuickView,
                showReviews: state.showReviews,
                emailNotifications: state.emailNotifications,
                pushNotifications: state.pushNotifications,
                marketingEmails: state.marketingEmails,
            })
        }
    )
);