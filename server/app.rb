require 'sinatra'

class Backend < Sinatra::Application
	configure do
		set :port, 8080
		set :views, settings.root + '/templates'
	end
	
	get '/' do
		@docs = markdown :docs
		haml :index
	end
end