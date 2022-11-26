import { InjectionToken } from "@angular/core";
import { TestModel } from "./test.model";

export const TEST_PROVIDER_CLASS = new InjectionToken<TestModel>('TEST_PROVIDER_CLASS')