export type BtnVariant = 'primary' | 'outline' | 'ghost' | 'gradient';
export type BtnSize = 'sm' | 'md' | 'lg';

export interface ButtonModel {
    label?: string;
    loading?: boolean;
    disabled?: boolean;
    variant?: BtnVariant;
    size?: BtnSize;
    icon?: string;
}
