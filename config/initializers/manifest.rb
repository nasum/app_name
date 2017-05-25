if File.exist?(Rails.root.join('public', 'dist', 'manifest.json'))
  Rails.application.config.assets_manifest = JSON.parse(File.read(Rails.root.join('public', 'dist', 'manifest.json')))
end
