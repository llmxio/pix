export default {
  async fetch(request, env) {
    const inputs = {
      prompt: "cyberpunk cat",
    };

    const response = await env.AI.run(
      "@cf/bytedance/stable-diffusion-xl-lightning",
      inputs
    );

    return new Response(response, {
      headers: {
        "content-type": "image/png",
      },
    });
  },
} satisfies ExportedHandler<Env>;
