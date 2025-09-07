import React, { useEffect } from 'react';
// import ReactMarkdown from 'react-markdown';
// import TagManager from 'react-gtm-module';
// import { Constants } from 'librechat-data-provider';
// import { useGetStartupConfig } from '~/data-provider';
// import { useLocalize } from '~/hooks';

export default function Footer({ className }: { className?: string }) {
  // const { data: config } = useGetStartupConfig();
  // const localize = useLocalize();

  // const privacyPolicy = config?.interface?.privacyPolicy;
  // const termsOfService = config?.interface?.termsOfService;

  // const privacyPolicyRender = privacyPolicy?.externalUrl != null && (
  //   <a
  //     className="text-text-secondary underline"
  //     href={privacyPolicy.externalUrl}
  //     target={privacyPolicy.openNewTab === true ? '_blank' : undefined}
  //     rel="noreferrer"
  //   >
  //     {localize('com_ui_privacy_policy')}
  //   </a>
  // );

  // const termsOfServiceRender = termsOfService?.externalUrl != null && (
  //   <a
  //     className="text-text-secondary underline"
  //     href={termsOfService.externalUrl}
  //     target={termsOfService.openNewTab === true ? '_blank' : undefined}
  //     rel="noreferrer"
  //   >
  //     {localize('com_ui_terms_of_service')}
  //   </a>
  // );

  // const mainContentParts = (
  //   typeof config?.customFooter === 'string'
  //     ? config.customFooter
  //     : '[LibreChat ' +
  //       Constants.VERSION +
  //       '](https://librechat.ai) - ' +
  //       localize('com_ui_latest_footer')
  // ).split('|');

  // useEffect(() => {
  //   if (config?.analyticsGtmId != null && typeof window.google_tag_manager === 'undefined') {
  //     const tagManagerArgs = {
  //       gtmId: config.analyticsGtmId,
  //     };
  //     TagManager.initialize(tagManagerArgs);
  //   }
  // }, [config?.analyticsGtmId]);

  // const mainContentRender = mainContentParts.map((text, index) => (
  //   <React.Fragment key={`main-content-part-${index}`}>
  //     <ReactMarkdown
  //       components={{
  //         a: ({ node: _n, href, children, ...otherProps }) => {
  //           return (
  //             <a
  //               className="text-text-secondary underline"
  //               href={href}
  //               target="_blank"
  //               rel="noreferrer"
  //               {...otherProps}
  //             >
  //               {children}
  //             </a>
  //           );
  //         },

  //         p: ({ node: _n, ...props }) => <span {...props} />,
  //       }}
  //     >
  //       {text.trim()}
  //     </ReactMarkdown>
  //   </React.Fragment>
  // ));

  // const footerElements = [...mainContentRender, privacyPolicyRender, termsOfServiceRender].filter(
  //   Boolean,
  // );

  // Create a constant for the footer text to comply with code standards
  const footerText = '清华大学中华传统文化智能实验室';

  return (
    <div className="relative w-full">
      <div
        className={
          className ??
          'absolute bottom-0 left-0 right-0 hidden items-center justify-center gap-2 px-2 py-2 text-center text-xs sm:flex md:px-[60px]'
        }
        style={{
          color: 'var(--text-secondary)',
        }}
        role="contentinfo"
      >
        {footerText}
      </div>
    </div>
  );
}
