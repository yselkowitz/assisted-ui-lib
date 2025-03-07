import * as React from 'react';
import {
  ButtonVariant,
  Spinner,
  Stack,
  StackItem,
  Text,
  TextVariants,
  Toolbar,
  ToolbarContent,
  ToolbarItem,
} from '@patternfly/react-core';
import { useTranslation } from 'react-i18next';
import { ToolbarButton } from './Toolbar';

export type WizardFooterGenericProps = {
  onNext?: () => void;
  onBack?: () => void;
  onCancel?: () => void;
  isNextDisabled?: boolean;
  isBackDisabled?: boolean;
  isSubmitting?: boolean;
  submittingText?: string;
  nextButtonText?: string;
};

type WizardFooterProps = WizardFooterGenericProps & {
  alerts?: React.ReactNode;
  errors?: React.ReactNode;
  leftExtraActions?: React.ReactNode;
};

export const WizardFooter: React.FC<WizardFooterProps> = ({
  alerts,
  errors,
  onNext,
  onBack,
  onCancel,
  isNextDisabled,
  isBackDisabled,
  leftExtraActions,
  isSubmitting,
  submittingText,
  nextButtonText,
}) => {
  const { t } = useTranslation();
  submittingText = submittingText || t('Saving changes...');
  return (
    <Stack hasGutter>
      {alerts && <StackItem>{alerts}</StackItem>}
      {errors && <StackItem>{errors}</StackItem>}
      <StackItem>
        <Toolbar data-testid="wizard-step-actions">
          <ToolbarContent>
            {leftExtraActions}
            {onNext && (
              <ToolbarButton
                variant={ButtonVariant.primary}
                name="next"
                onClick={onNext}
                isDisabled={isNextDisabled}
              >
                {nextButtonText || t('Next')}
              </ToolbarButton>
            )}
            {onBack && (
              <ToolbarButton
                variant={ButtonVariant.secondary}
                name="back"
                onClick={onBack}
                isDisabled={isBackDisabled}
              >
                {t('Back')}
              </ToolbarButton>
            )}
            <ToolbarButton
              variant={ButtonVariant.link}
              name="cancel"
              onClick={onCancel}
              isDisabled={false}
            >
              {t('Cancel')}
            </ToolbarButton>
            {isSubmitting && (
              <ToolbarItem>
                <Text component={TextVariants.small}>
                  <Spinner size="sm" /> {submittingText}
                </Text>
              </ToolbarItem>
            )}
          </ToolbarContent>
        </Toolbar>
      </StackItem>
    </Stack>
  );
};
