#import "RTNSampleSpec.h"
#import "RTNSample.h"

@implementation RTNSample

RCT_EXPORT_MODULE()

- (void)getPeerName:a resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject {
    NSString *result = [[NSString alloc] initWithString:a];
    resolve(result);
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeSampleSpecJSI>(params);
}

@end