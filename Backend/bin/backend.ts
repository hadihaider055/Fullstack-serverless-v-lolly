#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { VLollyBackend } from "../lib/backend-stack";

const app = new cdk.App();
new VLollyBackend(app, "VLollyBackend", { env: { region: "us-east-1" } });
