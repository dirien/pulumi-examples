// *** WARNING: this file was generated by crd2pulumi. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

import {ObjectMeta} from "../../meta/v1";

export class AuthorizationPolicy extends pulumi.CustomResource {
    /**
     * Get an existing AuthorizationPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AuthorizationPolicy {
        return new AuthorizationPolicy(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'kubernetes:security.istio.io/v1beta1:AuthorizationPolicy';

    /**
     * Returns true if the given object is an instance of AuthorizationPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AuthorizationPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AuthorizationPolicy.__pulumiType;
    }

    public readonly apiVersion!: pulumi.Output<"security.istio.io/v1beta1" | undefined>;
    public readonly kind!: pulumi.Output<"AuthorizationPolicy" | undefined>;
    public readonly metadata!: pulumi.Output<ObjectMeta | undefined>;
    /**
     * Configuration for access control on workloads. See more details at: https://istio.io/docs/reference/config/security/authorization-policy.html
     */
    public readonly spec!: pulumi.Output<any | undefined>;
    public readonly status!: pulumi.Output<{[key: string]: any} | undefined>;

    /**
     * Create a AuthorizationPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: AuthorizationPolicyArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            inputs["apiVersion"] = "security.istio.io/v1beta1";
            inputs["kind"] = "AuthorizationPolicy";
            inputs["metadata"] = args ? args.metadata : undefined;
            inputs["spec"] = args ? args.spec : undefined;
            inputs["status"] = args ? args.status : undefined;
        } else {
            inputs["apiVersion"] = undefined /*out*/;
            inputs["kind"] = undefined /*out*/;
            inputs["metadata"] = undefined /*out*/;
            inputs["spec"] = undefined /*out*/;
            inputs["status"] = undefined /*out*/;
        }
        if (!opts.version) {
            opts = pulumi.mergeOptions(opts, { version: utilities.getVersion()});
        }
        super(AuthorizationPolicy.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a AuthorizationPolicy resource.
 */
export interface AuthorizationPolicyArgs {
    readonly apiVersion?: pulumi.Input<"security.istio.io/v1beta1">;
    readonly kind?: pulumi.Input<"AuthorizationPolicy">;
    readonly metadata?: pulumi.Input<ObjectMeta>;
    /**
     * Configuration for access control on workloads. See more details at: https://istio.io/docs/reference/config/security/authorization-policy.html
     */
    readonly spec?: any;
    readonly status?: pulumi.Input<{[key: string]: any}>;
}