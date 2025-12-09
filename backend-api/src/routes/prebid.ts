import { Router, Request, Response } from "express";
import { analyzePrebidSnap } from "../services/openai-analyzer";
import { PrebidSnap } from "../types/prebid";